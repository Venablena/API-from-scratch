const uuid = require('uuid')
const curtains = []

function create(body) {
  const model = body.name
  const color = body.color
  const size = body.size
  const room = body.room

  const errors = []

  let response
  if(!name) {
    errors.push('model is required')
  }
  if(!colors) {
    errors.push('color is required')
  }
  if(!size) {
    errors.push('size is required')
  }
  if(!room) {
    errors.push('room is required')
  }

  if (errors.length > 0) response = {errors}
  else {
    const curtain = { id: uuid(), name, color, size, room }
    curtains.push(curtain)
    response = curtain
  }
  return response
}

function getAll(curtains){
    return curtains
}

module.exports = {getAll, create}
