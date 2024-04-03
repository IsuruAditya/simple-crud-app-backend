const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products", productRoute);



app.get("/", (req, res) => {
  res.send("Hello from Node API");
});



mongoose
  .connect(
    "mongodb+srv://Adithya_Sandaru:Test123@clustertest.5ixqilt.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=ClusterTest"
  )
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("connection failed!");
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
