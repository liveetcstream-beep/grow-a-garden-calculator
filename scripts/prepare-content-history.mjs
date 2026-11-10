import { execFileSync } from "node:child_process";

const isVercelBuild = process.env.VERCEL === "1" || Boolean(process.env.VERCEL_GIT_COMMIT_SHA);

if (isVercelBuild) {
  try {
    const shallow = execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    if (shallow === "true") {
      execFileSync("git", ["fetch", "--unshallow", "--no-tags", "origin"], {
        stdio: "ignore",
      });
    }
  } catch {
    // The site can still build; dates without available history are omitted or use data baselines.
    console.warn("Could not expand Git history; source update dates may be unavailable for older pages.");
  }
}
