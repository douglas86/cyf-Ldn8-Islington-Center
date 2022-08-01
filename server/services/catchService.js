export const catchService = async (res, err) => {
  await res.status(500).json(err);
};
