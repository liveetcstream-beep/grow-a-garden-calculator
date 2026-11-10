import { execFileSync } from "node:child_process";

const DATA_FILE_FALLBACKS: Record<string, string> = {
  "src/data/crops.ts": "2026-04-07",
  "src/data/mutations.ts": "2026-10-12",
  "src/data/pets.ts": "2026-10-16",
};

const dataSources = {
  crops: "src/data/crops.ts",
  mutations: "src/data/mutations.ts",
  pets: "src/data/pets.ts",
} as const;

const dateCache = new Map<string, string | null>();

function normalizePath(filePath: string): string {
  return filePath.replaceAll("\\", "/");
}

/** Uses source-file commit dates, so deploys alone do not make content look fresh. */
export function getSourceModifiedDates(sourcePaths: string[]): Map<string, Date | undefined> {
  const normalizedPaths = [...new Set(sourcePaths.map(normalizePath))];
  const uncachedPaths = normalizedPaths.filter((filePath) => !dateCache.has(filePath));

  if (uncachedPaths.length > 0) {
    try {
      const output = execFileSync(
        "git",
        ["log", "--format=%cs", "--name-only", "--", ...uncachedPaths],
        { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
      );
      const requested = new Set(uncachedPaths);
      let currentCommitDate: string | undefined;

      for (const line of output.split(/\r?\n/)) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(line)) {
          currentCommitDate = line;
          continue;
        }

        const filePath = normalizePath(line.trim());
        if (currentCommitDate && requested.has(filePath) && !dateCache.has(filePath)) {
          dateCache.set(filePath, currentCommitDate);
        }
      }
    } catch {
      // Git metadata may be unavailable in archive or non-Git deployments.
    }

    for (const filePath of uncachedPaths) {
      if (!dateCache.has(filePath)) {
        dateCache.set(filePath, DATA_FILE_FALLBACKS[filePath] ?? null);
      }
    }
  }

  return new Map<string, Date | undefined>(
    normalizedPaths.map((filePath) => {
      const isoDate = dateCache.get(filePath);
      return [filePath, isoDate ? new Date(`${isoDate}T12:00:00.000Z`) : undefined] as const;
    }),
  );
}

export function getLatestSourceModifiedAt(sourcePaths: string[]): Date | undefined {
  const dates = [...getSourceModifiedDates(sourcePaths).values()].filter(
    (date): date is Date => date instanceof Date && !Number.isNaN(date.getTime()),
  );

  return dates.length > 0
    ? new Date(Math.max(...dates.map((date) => date.getTime())))
    : undefined;
}

export function getDataUpdatedAt(kind: keyof typeof dataSources): Date | undefined {
  return getLatestSourceModifiedAt([dataSources[kind]]);
}

export function formatSourceDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatDataUpdatedAt(kind: keyof typeof dataSources): string {
  const date = getDataUpdatedAt(kind);
  return date ? formatSourceDate(date) : "Date unavailable";
}
