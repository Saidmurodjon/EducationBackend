const EduGroupModel = require('./EduGroup.model')

// get

async function getEduGroup(req, res) {
    try {
        const EduGroup = await EduGroupModel.find({})
        return res.status(200).send(EduGroup)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addEduGroup(req, res) {
    try {
        const EduGroup = await EduGroupModel.create(req.body)
        return res.status(200).send(EduGroup)
    } catch (err) {
        res.status(400).send(err)
    }
}

// update / put

async function updateEduGroup(req, res) {
    try {
        let EduGroupId = req.params.id
        let result = await EduGroupModel.findByIdAndUpdate(EduGroupId, req.body)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

// delete

async function deleteEduGroup(req, res) {
    try {
        let EduGroupId = req.params.id
        let result = await EduGroupModel.findByIdAndRemove(EduGroupId)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    getEduGroup,
    addEduGroup,
    updateEduGroup,
    deleteEduGroup
}