export const catchService = (res, err) => {
  res.status(500).json(err);
};
