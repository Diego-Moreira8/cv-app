function yearStrToNumber(year: string): number | null {
  const trimmedYear = year.trim();
  if (!trimmedYear) return null;

  const yearNumber = parseInt(trimmedYear);
  if (isNaN(yearNumber) || !Number.isInteger(yearNumber)) return null;

  return yearNumber;
}

export { yearStrToNumber };
