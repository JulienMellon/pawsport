const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const vaccinesController = require("../controllers/vaccines");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Vaccine Routes - simplified for now
// router.get("/:id", ensureAuth, vaccinesController.getVaccine);

router.post("/createVaccine/", upload.single("file"), vaccinesController.createVaccine);

router.put("/updateVaccine/:id", vaccinesController.updateVaccine);

router.delete("/deleteVaccine/:id", vaccinesController.deleteVaccine);

module.exports = router;
