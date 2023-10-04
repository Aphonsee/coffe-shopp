const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProductModel = require('./models/products');

const app = express();
app.use(cors());
app.use(express.json());

const CONNECT_STRING = "mongodb://127.0.0.1:27017/coffe_shopp";

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

app.get("/getproducts", (req, res) => {
    ProductModel.find()
    .then(products=> res.json(products))
    .catch(err=> res.json(err))
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
