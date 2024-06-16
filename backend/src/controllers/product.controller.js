import Products from "../models/product.model.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({}).populate({path : "category", select: "name"});;
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({
      message: "Error in fetching the products",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({
      message: "Error in fetching the product",
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log(req.user)
    const product = await Products.create(req.body);
    return res.status(201).send({ message: "Product created successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in creating the product", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({ message: "Product updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in updating the product", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByIdAndDelete(id);
    return res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in deleting the product", error: error.message });
  }
};

export { 
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
 
 };
