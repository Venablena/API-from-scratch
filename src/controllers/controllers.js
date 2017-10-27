const model = require('../models/models')

function getAll (req, res, next) {
  const data = model.getAll()
  res.json(data)
}

function create (req, res, next) {
  const data = model.create(req.body)
  if (data.errors) {
    return next({ status: 400, message: `Could not create new curtain`, errors: data.errors })
  }
  res.status(201).json(data)
}

function getOne (req, res, next) {
  const data = model.checkId(req.params.id)
  if(data.error) return next(data.error)
  res.json(data)
}

function update (req, res, next) {
  let data = model.checkId(req.params.id)
  if(data.error) return next(data.error)
  data = model.update(req.body, req.params.id)
  if(data.errors) {
    return next({status: 400, message: `Could not update curtain`, errors: data.errors})
  }
  res.json(data)
}

function remove (req, res, next) {
  let data = model.checkId(req.params.id)
  if(data.error) return next(data.error)
  data = model.deleteOne(req.params.id)
  res.json(data)
}

module.exports = {
  getAll,
  create,
  getOne,
  update,
  remove
 }
