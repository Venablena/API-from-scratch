const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/curtains', ctrl.getAll)
router.post('/curtains', ctrl.create)
router.get('/curtains/:id', ctrl.getOne)
//router.put('/curtains/:id', ctrl.update)
//router.delete('/curtains/:id', ctrl.deleteOne)

module.exports = router
