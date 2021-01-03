// Converts dates to a `Month Year` format.
export const dateFormat = (date) => {
  if (date) {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  }

  return null;
};

export default dateFormat;
