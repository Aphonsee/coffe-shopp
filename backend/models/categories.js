const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        nameCate : String
      
    }
)

const CategoryModel = mongoose.model("Category", categorySchema)
module.exports = CategoryModel;