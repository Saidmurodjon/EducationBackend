const express = require('express')
const router = express.Router()
const EduGroupController = require('./EduGroup.controller')

// get

router.route('/').get(EduGroupController.getEduGroup)

// post

router.route('/').post(EduGroupController.addEduGroup)

// put

router.route('/:id').put(EduGroupController.updateEduGroup)

// delete

router.route('/:id').delete(EduGroupController.deleteEduGroup)

module.exports = router