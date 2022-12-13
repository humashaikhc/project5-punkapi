export const extractYear = (date) => {
  if(!date.includes("/")) {
    return "Invalid year";
  };
  const splitDate = date.split("/");
  const yearOnly = parseInt(splitDate[1]);
  if (yearOnly === isNaN) {
    return "Invalid year"
  } else {
    return yearOnly;
  }
}