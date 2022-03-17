const express = require('express')
const router = express.Router()
const eduGroupController = require('./eduGroup.controller')

// get

router.route('/').get(eduGroupController.getEduGroup)

// post

router.route('/').post(eduGroupController.addEduGroup)

// put

router.route('/:id').put(eduGroupController.updateEduGroup)

// delete

router.route('/:id').delete(eduGroupController.deleteEduGroup)

module.exports = router