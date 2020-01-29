// class ErrorHandle extends Error {
//     constructor(statusCode, message) {
//       super()
//       this.statusCode = statusCode
//       this.message = message
//     }
//   }

exports.errorMiddleware = (err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  const { statusCode, message } = err;

  return res.status(statusCode).json({
    error: "error",
    statusCode,
    message
  });
};
