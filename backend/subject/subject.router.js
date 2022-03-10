const express = require('express')
const router = express.Router()
const subjectController = require('./subject.controller')

// get

router.route('/').get(subjectController.getsubject)

// post

router.route('/').post(subjectController.addsubject)

// put

router.route('/:id').put(subjectController.updatesubject)

// delete

router.route('/:id').delete(subjectController.deletesubject)

module.exports = router