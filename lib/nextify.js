module.exports = function nextify(asyncFn) {
  return function middleware(req, res, next) {
    asyncFn(req, res, next).catch((err) => next(err));
  };
};
