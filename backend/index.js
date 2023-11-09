const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/products");
const CategoryModel = require("./models/categories");
const UserModel = require("./models/users");
const createCart = require("./models/carts");
const OrderDetailModel = require("./models/orderdetail");

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
//get cart
 app.get("/getcart/:userId", (req, res) => {
  const userId = req.params.userId;
  createCart
    .findOne({ userId: userId })
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
        // Tạo người dùng mới
        UserModel.create({
          username: username,
          email: email,
          password: password,
        })
          .then((createdUser) => {
            // Tạo giỏ hàng cho người dùng mới
            createCart
              .create({ userId: createdUser._id })
              .then(() => {
                return res.json("Success");
              })
              .catch((error) => {
                return res.status(500).json(error);
              });
          })
          .catch((error) => {
            return res.status(500).json(error);
          });
      }
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username: username })
    .then((user) => {
      if (user) {
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

//code context cua react nhieu van de nen de hung code backend luon cho ok hunb

//à th vẫn phức tạp :)))

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

//Cart
//Lúc này mỗi user có 1 giỏ hàng r thì bắt đầu giải quyết làm sao để thêm sản phẩm vào giỏ hàng
app.post("/cart/addItems", (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId; // Lấy ID của sản phẩm từ request bo
  const quantity = req.body.quantity; // Lấy số lượng từ request bod
  const price = +req.body.price;

  // Kiểm tra xem sản phẩm đã tồn tại trong mảng items_cart hay chưa
  createCart
    .findOne({ userId: userId })
    .then((cart) => {
      if (cart) {
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
        const existingProduct = cart.cart_item.find(
          (item) => item.productId.toString() === productId.toString()
        );

        if (existingProduct) {
          // Nếu sản phẩm đã tồn tại, tăng số lượng
          existingProduct.quantity += quantity;
          existingProduct.price *= existingProduct.quantity;
          

          //hmm hung nghi la price no tang len r a
          //con bug gi nua hok no kh len cai giao dien nua do
        } else {
          // Nếu sản phẩm chưa tồn tại, thêm mới sản phẩm vào giỏ hàng
          cart.cart_item.push({
            productId,
            quantity,
            price,
          });
        }
        

        // Lưu lại giỏ hàng sau khi thay đổ
        cart
          .save()
          .then(() => {
            res.json({
              success: true,
              message: "Sản phẩm đã được thêm vào giỏ hàng",
            });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json(error);
          });
      } else {
        // Nếu không tìm thấy giỏ hàng của người dùng, bạn có thể xử lý tạo giỏ hàng mới ở đây nếu cần.
        // Tùy theo yêu cầu của ứng dụng của bạn.
        res
          .status(404)
          .json({ error: "Không tìm thấy giỏ hàng của người dùng" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//Cập nhật thông tin sản phẩm
app.put("/updatepro/:productId", (req, res) => {
  const productId = req.params.productId;
  ProductModel.findByIdAndUpdate(
    { _id: productId },
    {
      namePro: req.body.namePro,
      price: req.body.price,
      imagePro: req.body.imagePro,
      category: req.body.category,
    }
  )
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

//Tạo sản phẩm
app.post("/createpro", (req, res) => {
  ProductModel.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

//Xóa sản phẩm trong giỏ hàng
app.delete("/deleteitem/:userId/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  createCart.findOne({ userId: userId })
    .then((cart) => {
      if (cart) {
        // Tìm sản phẩm cần xóa trong mảng cart_item
        const index = cart.cart_item.findIndex(
          (item) => item.productId.toString() === productId
        );

        if (index !== -1) {
          // Xóa sản phẩm khỏi mảng cart_item
          cart.cart_item.splice(index, 1);

          // Lưu cập nhật vào cơ sở dữ liệu
          cart.save()
            .then(() => {
              res.status(200).json({ message: "Sản phẩm đã bị xóa khỏi giỏ hàng" });
            })
            .catch((error) => {
              res.status(500).json({ error: error.message });
            });
        } else {
          res.status(404).json({ error: "Không tìm thấy sản phẩm trong giỏ hàng" });
        }
      } else {
        res.status(404).json({ error: "Không tìm thấy giỏ hàng của người dùng" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
    
});
// tăng số lượng sản phẩm 
app.put("/cart/increaseQuantity/:userId/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  console.log(userId);
  console.log(productId);
  

  createCart
    .findOne({ userId: userId })
    .then((cart) => {
      if (cart) {
        const existingProduct = cart.cart_item.find(
          (item) => item.productId.toString() === productId.toString()
        );

        if (existingProduct) {
          // Tăng số lượng sản phẩm
          existingProduct.quantity += 1;

          // Lưu giỏ hàng sau khi cập nhật
          cart
            .save()
            .then(() => {
              res
                .status(200)
                .json({ message: "Sản phẩm đã bị xóa khỏi giỏ hàng" });
            })
            .catch((error) => {
              res.status(500).json({ error: error.message });
            });
        } else {
          res
            .status(404)
            .json({ error: "Không tìm thấy sản phẩm trong giỏ hàng" });
        }

        
      } else {
        res
          .status(404)
          .json({ error: "Không tìm thấy giỏ hàng của người dùng" });
      }
     return app.get("/getcart/:userId");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });

});
// API để giảm số lượng sản phẩm trong giỏ hàng
app.put("/cart/decreaseQuantity/:userId/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  

  createCart
    .findOne({ userId: userId })
    .then((cart) => {
      if (cart) {
        const existingProduct = cart.cart_item.find(
          (item) => item.productId.toString() === productId.toString()
        );

        if (existingProduct) {
          // Giảm số lượng sản phẩm
          existingProduct.quantity -= 1;
          
          // Lưu giỏ hàng sau khi cập nhật
          cart
            .save()
            .then(() => {
              res
                .status(200)
                .json({ message: "Sản phẩm đã giảm " });
            })
            .catch((error) => {
              res.status(500).json({ error: error.message });
            });
        } else {
          res
            .status(404)
            .json({ error: "Không tìm thấy sản phẩm trong giỏ hàng" });
        }
      } else {
        res
          .status(404)
          .json({ error: "Không tìm thấy giỏ hàng của người dùng" });
      }
      return app.get("/getcart/:userId");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

//trạng thái sản phẩm 
app.put('/updatestatuspro/:productId', (req, res) => {
  const productId = req.params.productId;
  ProductModel.findByIdAndUpdate({_id:productId}, {
    status: req.body.status
  })
  .then(product => res.json(product))
  .catch(err => res.json(err))
})