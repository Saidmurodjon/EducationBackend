const eduCameModel = require('./eduCame.model')

// get

async function getEduCame(req, res) {
    try {
        const eduCame = await eduCameModel.find({})
        return res.status(200).send(eduCame)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addEduCame(req, res) {
    try {
        const eduCame = await eduCameModel.create(req.body)
        return res.status(200).send(eduCame)
    } catch (err) {
        res.status(400).send(err)
    }
}

// update / put

async function updateEduCame(req, res) {
    try {
        let eduCameId = req.params.id
        let result = await eduCameModel.findByIdAndUpdate(eduCameId, req.body)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

// delete

async function deleteEduCame(req, res) {
    try {
        let eduCameId = req.params.id
        let result = await eduCameModel.findByIdAndRemove(eduCameId)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

// new function creative by Saidmurod
async function ChangeCame(req, res) {
  try {
    let eduCameId = req.params.id;
    const eduCame = await eduCameModel.find({});
    const data = new Date();
    const category = {
      back: true,
    };
    eduCame.map(async (elem) => {
      if (elem.pupilId == eduCameId && elem.date == data.getDate()&& elem.back==false) {
        let result = await eduCameModel.findByIdAndUpdate(elem._id, category);
    }
});
return res.status(200)
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = {
  getEduCame,
  addEduCame,
  updateEduCame,
  deleteEduCame,
  ChangeCame,
};