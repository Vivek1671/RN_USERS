const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const inovetorSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type: "String",
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

// Pre-save middleware to hash the password before saving it to the database
inovetorSchema.pre('save', async function (next) {
    try {
        // Only hash the password if it has been modified or is new
        if (this.isModified('password') && this.password) {
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model("Inovetor", inovetorSchema);
