const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const offerCtrl = require("../controllers/offer");

router.get("/", auth, offerCtrl.getAlloffer);
router.post("/", auth, multer, offerCtrl.createOffer);
router.get("/:id", auth, offerCtrl.getOneOffer);
router.put("/:id", auth, multer, offerCtrl.modifyOffer);
router.delete("/:id", auth, offerCtrl.deleteOffer);

module.exports = router;
