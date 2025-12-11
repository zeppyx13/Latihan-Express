const express = require("express");
const router = express.Router();
const { getdefault, getjson, geterror } = require("../controller/dafult");

router.get("/", getdefault);
router.get("/json", getjson);
router.get("/error", geterror);
module.exports = router;
