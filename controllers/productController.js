const Product = require("../models/Products");

const addProduct = async (req, res, next) => {
  try {
    const { productName, basePrice, sellingPrice } = req.body;

    if (!productName || !basePrice || !sellingPrice) {
      res.status(400).json({
        message: "Bad Request!",
      });
    }

    const newProduct = new Product({
      productName,
      basePrice,
      sellingPrice,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const editProductById = async (req, res, next) => {
  try {
    const productId = req.body.id;
    const { productName, basePrice, sellingPrice } = req.body;

    if (!productId || !productName || !basePrice || !sellingPrice) {
      res.status(400).json({
        message: "Bad Request",
      });
    }

    await Product.updateOne(
      { _id: id },
      {
        $set: {
          productName,
          basePrice,
          sellingPrice,
        },
      }
    );

    res.status(200).json({
      message: "Product Edited Sucessfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const title = req.body.title || "";

    const productData = await Product.find(
      {
        productName: { $regex: title, $options: "i" },
      },
      {
        productName: 1,
        basePrice: 1,
        sellingPrice: 1,
      }
    );

    res.status(200).json({
      data: productData,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async(req,res,next) => {
    try {
        const productId = req.body.id;
     if(!productId) {
        res.status(400).json({
            "message":"Bad Request",
        })
     }
       
    await Product.deleteOne({ _id: productId})

     res.status(200).json({
        "message":"Product Deleted Successfully"
     })

    } catch (error) {
         next(error)
    }
}

module.exports = {
  addProduct,
  getAllProducts,
  editProductById,
  deleteProductById,
};
