import dayjs from 'dayjs';

// Converts dates to a `Month YYYY` format.
const renderDate = (date) => {
  if (date) return dayjs(date).format('MMMM YYYY');

  return null;
};

export default renderDate;
