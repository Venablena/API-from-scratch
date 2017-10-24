const model = require('../models/models')

function getAll (req, res, next) {
  const data = model.getAll()
  res.json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)
  if (result.errors) {
    return next({ status: 400, message: `Could not create new curtain`, errors: result.errors })
  }
  res.status(201).json({ data: result })
}

function getOne (req, res, next) {
  const data = model.checkId(req.params.id)
  //console.log(data);
  if(data.error) return next(data.error)
  res.json(data)
}

function update (req, res, next) {
  const data = model.checkId(req.params.id)
  if(!data) return next({ status: 404, message: `Could not find item with this id`})
}

function deleteOne (req, res, next) {
  const data = model.checkId(req.params.id)
  if(!data) return next({ status: 404, message: `Could not find item with this id`})
}

module.exports = { getAll, create, getOne, update, deleteOne }
