const express = require("express");
const router = express.Router();
const { getdefault } = require("../controller/dafult");

router.get("/", getdefault);

module.exports = router;
