// Helper function to calculate duration
export function calculateDuration(
  startDate: string,
  endDate: string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days per month

  if (diffMonths < 12) {
    return `${diffMonths} mos`;
  }
  const years = Math.floor(diffMonths / 12);
  const remainingMonths = diffMonths % 12;
  if (remainingMonths === 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }
  return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mos`;
}
