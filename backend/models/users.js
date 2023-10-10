const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        nameU : String,
        identification : Number,
        email : String,
        year : Date,
        gender : String, //cái này nên là kiểu enums là best, mà th để string cũng dc
        address : String,
        phone : Number //phone nên là string đi nha :)) okk sếp
    }
)

const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel