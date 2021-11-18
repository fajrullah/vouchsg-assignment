'user strict'
const clientErrorHandler = (err, req, res, next) => {
  console.group('==========================')
  console.warn('*** ERROR HERE ***')
  console.error('# HEAD ERROR : ', err)
  console.log('# REQUEST BODY', req.body)
  console.log('# REQUEST QUERY', req.query)
  console.log('# REQUEST PARAMS', req.params)
  console.log('# ROUTE', req.route)
  console.warn('*** END HERE ***')
  console.groupEnd('==========================')
  if (err) {
    res.status(400).json({ msgCode: 'Error' })
  } else {
    next()
  }
}

const clientError400 = (req, res, next) => {
  return res.status(400).json({
    msgCode: 'Error'
  })
}

const logErrors = (err, req, res, next) => {
  next(err)
}

module.exports = {
  clientErrorHandler: clientErrorHandler,
  logErrors: logErrors,
  clientError400: clientError400
}
