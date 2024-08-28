const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const investorSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});


investorSchema.pre("save",async function(next){
    try{
        if(this.isModified("password") && this.password){
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password,salt)
        }
        next();
    }catch(err){
        next(err);
    }
})


module.exports = mongoose.model("Investor", investorSchema)
