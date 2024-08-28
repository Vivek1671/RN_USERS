const express = require("express")

const router = express.Router()

const {CreateUser, LoginUser} = require("../controllers/investorController")

router.post("/InvRegister", CreateUser)
router.post("/InvLogin", LoginUser)

module.exports = router