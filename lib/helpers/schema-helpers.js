export const getDateXDayFromNow = (awayDay = 60) => {
  const date = new Date(Date.now() + awayDay * 24 * 60 * 60 * 1000);
  return date.toISOString().split("T")[0];
};
