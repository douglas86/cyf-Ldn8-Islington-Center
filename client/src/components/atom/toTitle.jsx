export const toTitle = (s) => {
  return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase().split(",")[0];
};
