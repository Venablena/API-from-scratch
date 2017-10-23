const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)

module.exports = router
