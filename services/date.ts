export const getDateLastSevenDays = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  return date.toISOString();
};
