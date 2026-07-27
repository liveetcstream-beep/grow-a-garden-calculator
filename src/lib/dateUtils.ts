/**
 * Utility function to calculate the most recent Monday's date automatically.
 * Returns a formatted string like "July 27, 2026".
 * Automatically updates every Monday without manual edits.
 */
export function getLastMondayFormatted(): string {
  const today = new Date();
  const day = today.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ...
  const diffToMonday = day === 0 ? 6 : day - 1;
  const lastMonday = new Date(today);
  lastMonday.setDate(today.getDate() - diffToMonday);

  return lastMonday.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

/**
 * Returns formatted month and year like "July 2026".
 */
export function getCurrentMonthYearFormatted(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
}
