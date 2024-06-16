import Products from "../models/product.model.js";

// Handler to get all products
const getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database and populate the 'category' field with 'name'
    const products = await Products.find({}).populate({ path: "category", select: "name" });
    
    // Return the products with a 200 OK status
    return res.status(200).send(products);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({
      message: "Error in fetching the products",
      error: error.message,
    });
  }
};

// Handler to get a specific product by its ID
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the product by its ID
    const product = await Products.findById(id);
    
    // Return the product with a 200 OK status
    return res.status(200).send(product);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({
      message: "Error in fetching the product",
      error: error.message,
    });
  }
};

// Handler to create a new product
const createProduct = async (req, res) => {
  try {
    // Create a new product with data from the request body
    const product = await Products.create(req.body);
    
    // Return a success response with a 201 Created status
    return res.status(201).send({ message: "Product created successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res
      .status(500)
      .send({ message: "Error in creating the product", error: error.message });
  }
};

// Handler to update an existing product by its ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the product by its ID and update it with the new data
    const product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Product updated successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res
      .status(500)
      .send({ message: "Error in updating the product", error: error.message });
  }
};

// Handler to delete an existing product by its ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the product by its ID and delete it
    const product = await Products.findByIdAndDelete(id);
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res
      .status(500)
      .send({ message: "Error in deleting the product", error: error.message });
  }
};

// Export the handler functions for use in other parts of the application
export { 
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
