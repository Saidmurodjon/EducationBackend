const twilio = require("twilio");
const PupilsModel = require("./../pupils/puplis.model");
var data = new Date();

const twl = twilio(
  "AC47906b40a9d4456c8deb66a5cef10fc4",
  "3d6bd0c20d94808b962433154a3f841a"
);
const from = "+13345532376";

async function sendSms(req, res) {
  try {
    let userId = req.params.id;
    let user = await PupilsModel.findOne({ _id: userId });
    let cost = req.body.cost;

    twl.messages.create({
      to: user.parentsPhoneNumber,
      from: from,
      body: `Farzandingiz ${user.name} ${
        user.subject
      } fani uchun ${data.getDate()}
            sanada ${cost} so'm to'lov qildi`,
    });
    return res.status(200).send(user.paymet);
  } catch (err) {
    res.status(400).send(err);
    // console.log(err);
  }
}
// keldi-keti uchun sms jo'natish function
async function Visitation(req, res) {
  try {
    let userId = req.params.id;
    let user = await PupilsModel.findOne({ _id: userId });
    if (req.body.deyt == data.getDate()) {
      twl.messages.create({
        to: user.parentsPhoneNumber,
        from: from,
        body: `Farzandingiz ${user.name} soat ${req.body.hours} da O'quv markaziga yetib keldi.`,
      });
      //   console.log(data.getUTCMinutes());
      return res.status(200).send("farzandingiz keldi");
    } else {
      twl.messages.create({
        to: user.parentsPhoneNumber,
        from: from,
        body: `Farzandingiz ${user.name} soat ${req.body.hours} da O'quv markazidan chiqib ketdi`,
      });
      return res.status(200).send("ketti");
    }
  } catch (err) {
    res.status(400).send(err);
    // console.log(err);
  }
}

module.exports = {
  sendSms,
  Visitation,
};
