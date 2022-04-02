const express = require("express");
const router = express.Router();
const uploadMulter = require("./../teachers/upload");

const pupilsController = require("./pupils.controller");
router.route("/").get(pupilsController.getPupils);
router.route("/").post(uploadMulter, pupilsController.addPupils);
router.route("/:id").put(uploadMulter, pupilsController.updatePupils);
router.route("/:id").delete(pupilsController.deletePupils);
router.route("/pay/:id").put(pupilsController.payPupils);

// yangi qoshilgan functionlar so'rovlari
router.route("/kel/:id").put(pupilsController.changePupils);

router.route("/check/:id").put(pupilsController.checkPupils);

module.exports = router;
