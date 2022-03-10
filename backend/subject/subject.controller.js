const subjectModel = require('./subject.model')

// get

async function getsubject(req, res) {
    try {
        const subject = await subjectModel.find({})
        return res.status(200).send(subject)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addsubject(req, res) {
    try {
        const subject = await subjectModel.create(req.body)
        return res.status(200).send(subject)
    } catch (err) {
        res.status(400).send(err)
    }
}

// update / put

async function updatesubject(req, res) {
    try {
        let subjectId = req.params.id
        let result = await subjectModel.findByIdAndUpdate(subjectId, req.body)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

// delete

async function deletesubject(req, res) {
    try {
        let subjectId = req.params.id
        let result = await subjectModel.findByIdAndRemove(subjectId)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    getsubject,
    addsubject,
    updatesubject,
    deletesubject
}