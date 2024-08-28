const express = require("express")

const router = express.Router()

const {CreateUser, LoginUser} = require("../controllers/inovetorController")

router.post("/InoRegister", CreateUser)
router.post('/InoLogin', LoginUser);

module.exports = router