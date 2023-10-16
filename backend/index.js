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
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username:username }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("sai password");
      }
    } else {
      res.json("No record");
    }
  });
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
