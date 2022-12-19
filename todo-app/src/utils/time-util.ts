/**
 *
 * @param dowDate
 *  count date
 * @returns
 * days, hours, minutes, seconds, timeLeft
 */

export const timeUtil = (dowDate: string) => {
  const countDownDate = new Date(dowDate).getTime();
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, timeLeft };
};
