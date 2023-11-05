const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/products");
const CategoryModel = require("./models/categories");
const UserModel = require("./models/users");

const app = express();
app.use(cors());
app.use(express.json());

const CONNECT_STRING =
  "mongodb+srv://ddoan951:choidovaobanoi22%40@cluster0.fkexucu.mongodb.net/Coffe_Shopp?retryWrites=true&w=majority";

mongoose.connect(CONNECT_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/getproducts", (req, res) => {
  ProductModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});
//productdetail
app.get("/getproducts/:_id", (req, res) => {
  const productId = req.params._id;
  ProductModel.findById(productId)
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

//get data category
app.get("/getcategories", (req, res) => {
  CategoryModel.find()
    .then((categories) => res.json(categories))
    .catch((err) => err.json(err));
});

//get data user
app.get("/getusers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  UserModel.findOne({ username: username })
    .then((user) => {
      if (user) {
        return res.status(409).json("Ten tai khoan da ton tai");
      } else {
        UserModel.create({
          username: username,
          email: email,
          password: password,
        })
          .then((users) => res.json("Success"))
          .catch((error) => res.status(500).json(error));
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username: username })
    .then((user) => {
      if (user.username) {
        if (user.password === password) {
          res.status(200).json({
            message: "Thanh cong",
            data: user,
          });
        } else {
          res.status(409).json("sai password");
        }
      }
    })
    .catch((err) => res.status(500).json(err));
});

// Lọc danh sách sản phẩm dựa trên categoryId
app.get("/getcategories/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  if (!categoryId) {
    return res.status(400).json({ error: "categoryId is required" });
  }
  ProductModel.find({ category: new mongoose.Types.ObjectId(categoryId) })
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch products" });
    });
});

//Cập nhật thông tin sản phẩm 
app.put('/updatepro/:productId', (req, res) => {
  const productId = req.params.productId;
  ProductModel.findByIdAndUpdate({_id:productId}, {
    namePro: req.body.namePro,
    price: req.body.price,
    imagePro: req.body.imagePro,
    category: req.body.category
  })
  .then(product => res.json(product))
  .catch(err => res.json(err))
})

//Tạo sản phẩm
app.post("/createpro", (req, res) => {
  ProductModel.create(req.body)
  .then(product => res.json(product))
  .catch(err => res.json(err))
})