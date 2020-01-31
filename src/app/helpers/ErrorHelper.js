exports.errorMiddleware = (err, req, res) => {
  if (!err.statusCode) err.statusCode = 500;

  const { statusCode, message } = err;

  return res.status(statusCode).json({
    error: "error",
    statusCode,
    message
  });
};
