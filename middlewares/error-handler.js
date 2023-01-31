module.exports = function errorHandler (err, _req, res, _next) {
  console.log('An unexpected error occurred: ', err)
  const respBody = { message: 'Internal Server Error' }

  if (process.env.NODE_ENV !== 'production') {
    respBody.stack = err?.stack || ''
    respBody.message = err?.message || ''
  }

  res.status(500).send(respBody)
}
