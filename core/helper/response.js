/**
 * @author Fajrul
 * Response builder
 */
const INITIAL = 200
module.exports = (res, result, status = INITIAL) => {
  return res.status(status).json({

    msgCode: 'success',

    result
  })
}
