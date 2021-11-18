const { validationResult } = require('express-validator')

const isEntityFalse = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json(errors)
  } else {
    next()
  }
}

module.exports = {
  isEntityFalse
}
