const eduGroupModel = require('./eduGroup.model')

// get

async function getEduGroup(req, res) {
    try {
        const eduGroup = await eduGroupModel.find({})
        return res.status(200).send(eduGroup)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addEduGroup(req, res) {
    try {
        const eduGroup = await eduGroupModel.create(req.body)
        return res.status(200).send(eduGroup)
    } catch (err) {
        res.status(400).send(err)
    }
}

// update / put

async function updateEduGroup(req, res) {
    try {
        let eduGroupId = req.params.id
        let result = await eduGroupModel.findByIdAndUpdate(eduGroupId, req.body)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

// delete

async function deleteEduGroup(req, res) {
    try {
        let eduGroupId = req.params.id
        let result = await eduGroupModel.findByIdAndRemove(eduGroupId)
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