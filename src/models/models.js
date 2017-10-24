const uuid = require('uuid')
const curtains = []

function create(body) {
  const errors = checkParams(body)
  if (errors.length > 0) return { errors }
  else return createItem(body)
}

function getAll(items){
    return curtains
}


/////////////////////////////////////////
// Helper functions
////////////////////////////////////////

// function checkId(id) {
//   return curtains.find(item => item.id === id)
// }

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

module.exports = {getAll, create, checkId}
