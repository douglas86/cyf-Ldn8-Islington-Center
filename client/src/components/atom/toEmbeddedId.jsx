export const toEmbeddedId = (id) => {
  return id.split("=")[1].split("&")[0];
};
