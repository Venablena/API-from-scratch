//This is sloppy, I'm using the find id too many times throuhgout. Could refactor if I find some time...at least it works now :)!

const uuid = require('uuid')
const curtains = []

function create(body) {
  const errors = checkParams(body)
  if (errors.length > 0) return { errors }
  return createItem(body)
}

function getAll(items) {
    return curtains
}

function deleteOne(curtain) {
  const match = curtains.find(item => item.id === curtain)
  const index = curtains.indexOf(curtain)
  return curtains.splice(index, 1)
}

function update(body, id) {
  const errors = checkParams(body)
  if (errors.length > 0) return { errors }
  return updateItem(body, id)
}

/////////////////////////////////////////
// Helper functions
////////////////////////////////////////

function checkId(id) {
  const match = curtains.find(item => item.id === id)
  if(!match) return {error: { status: 404, message: `Could not find item with the id ${id}`}}
  return match
}

function checkParams(body) {
  const errors = []

  const model = body.model
  const color = body.color
  const size = body.size
  const room = body.room

  if(!model) errors.push('model is required')
  if(!color) errors.push('color is required')
  if(!size) errors.push('size is required')
  if(!room) errors.push('room is required')

  return errors
}

function createItem(body) {
  const item = { id: uuid(), model: body.model, color: body.color, size: body.size, room: body.room}
  curtains.push(item)
  return item
}

function updateItem(body, id) {
  const item = { id: id, model: body.model, color: body.color, size: body.size, room: body.room}
  const match = curtains.find(curtain => curtain.id === id)
  const index = curtains.indexOf(match)
  curtains[index] = item
  return curtains[index]
}

module.exports = {getAll, create, checkId, update, deleteOne}
