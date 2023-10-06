const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProductModel = require('./models/products');
const CategoryModel = require('./models/categories');
const UserModel = require('./models/users');

const app = express();
app.use(cors());
app.use(express.json());

const CONNECT_STRING = "mongodb+srv://ddoan951:choidovaobanoi22%40@cluster0.fkexucu.mongodb.net/Coffe_Shopp?retryWrites=true&w=majority";

mongoose.connect(CONNECT_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


//api getData
//get data product
app.get("/getproducts", (req, res) => {
    ProductModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
});

//get data category
app.get("/getcategories", (req, res) => {
  CategoryModel.find()
  .then(categories => res.json(categories))
  .catch(err => err.json(err))
});

//get data user
app.get("/getusers", (req, res) => {
  UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
});