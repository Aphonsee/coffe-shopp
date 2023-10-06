const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        nameU : String,
        identification : Number,
        email : String,
        year : Date,
        gender : String,
        address : String,
        phone : Number
    }
)

const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel