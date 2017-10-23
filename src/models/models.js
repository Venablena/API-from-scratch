const uuid = require('uuid')
const curtains = []

function create(body) {
  const model = body.model
  const color = body.color
  const size = body.size
  const room = body.room

  const errors = []

  let response
  if(!model) {
    errors.push('model is required')
    //response = { errors }
  }
  // if(!colors) errors.push('color is required')
  // if(!size) errors.push('size is required')
  // if(!room) errors.push('room is required')

  if (errors.length > 0) response = {errors}
  else {
    const curtain = { id: uuid(), model }
    //, color, size, room
    curtains.push(curtain)
    response = curtain
  }
  return response
}

function getAll(curtains){
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


module.exports = {getAll, create, checkId}
