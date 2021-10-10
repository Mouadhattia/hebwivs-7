const express = require("express");
const playerCtrl = require("../controllers/playerCtrl");
const router = express.Router();

//get all
router.get("/", playerCtrl.get);
//get one
router.get("/:id", playerCtrl.getOne);
//put one
router.put("/:id", playerCtrl.put);
//post
router.post("/", playerCtrl.post);
module.exports = router;
