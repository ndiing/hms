const express = require("express");
const Controller = require("./controller");

const router = express.Router();

router.use(Controller.init);
router.post("/", Controller.post);
router.get("/:_id?", Controller.get);
router.patch("/:_id", Controller.patch);
router.delete("/:_id", Controller.delete);

module.exports = router;
