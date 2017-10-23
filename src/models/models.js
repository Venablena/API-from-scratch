const uuid = require('uuid')
const curtains = []

function create(body) {
  const errors = checkParams(body)
  let response

  if (errors.length > 0) response = {errors}
  else {
    const curtain = { id: uuid(), model, color, size, room }
    curtains.push(curtain)
    response = curtain
  }
  return response
}

function getAll(curtains){
    console.log(curtains);
    return curtains
}


/////////////////////////////////////////
// Helper functions
////////////////////////////////////////

function checkId(req, res, next) {
  const id = req.params.id
  const match = curtains.find(item => item.id === id)
  if(!match) return next({status: 404, message: `Could not find item with the id ${id}`})
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

// function createItem() {
//   const item = { id: uuid(), model, color, size, room }
//   curtains.push(curtain)
//   response = curtain
// }

module.exports = {getAll, create, checkId}
