export const thenService = async (res, message) => {
  await res.status(200).send(message);
};
