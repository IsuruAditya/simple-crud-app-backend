const express = require("express");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');



//
router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/', createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;




//below is also possible but recommended to use different files
/* router.get('/', async (req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}); */
