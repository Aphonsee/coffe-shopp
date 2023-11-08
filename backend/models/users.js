const mongoose = require('mongoose')



//Lúc này tuyết hà phải nghĩ tới việc 1 user sẽ phải có 1 giỏ hàng
//Còn làm sao để tạo ra giỏ hàng cho user thì làm nó ở cái bước đăng ký 
//Hiểu hok ta ch nha cais cho tao gio hang a
//cái này thì mình làm cái hàm riêng là createCart(userId)
//lúc mà đăng ký tài khoản thì gọi tới hàm createCart(userId) đó rồi truyền userId vào a hieu

const userSchema = new mongoose.Schema(
    {
        username :{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        email : {
            type:String,
            require:true,
        }
       
    }
)

const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel