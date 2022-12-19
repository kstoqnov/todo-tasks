/**
 *
 * @param hours
 * hours to calculate expiryDate
 * @returns
 * expiryDate
 */

export const expireTask = (hours: number): string => {
  let expiryDate = new Date(new Date().setHours(new Date().getHours() + hours));

  return expiryDate.toISOString();
};
