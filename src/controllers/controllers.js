const model = require('../models/models')

function getAll (req, res, next) {
  const data = model.getAll()
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new curtain`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

module.exports = { getAll, create }
