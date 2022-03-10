const express = require('express')
const router = express.Router()
const eduCameController = require('./eduCame.contoller')

// get

router.route('/').get(eduCameController.getEduCame)

// post

router.route('/').post(eduCameController.addEduCame)

// put

router.route('/:id').put(eduCameController.updateEduCame)

// delete

router.route('/:id').delete(eduCameController.deleteEduCame)

module.exports = router