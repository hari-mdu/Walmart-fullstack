import Order from "../models/order.model.js";

// Handler to get all orders
const getAllOrders = async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await Order.find({});
    
    // Return the orders with a 200 OK status
    return res.status(200).send(orders);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in getting orders", error: error.message });
  }
};

// Handler to get a specific order by its ID
const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the order by its ID
    const order = await Order.findById(id);
    
    // Return the order with a 200 OK status
    return res.status(200).send(order);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in getting order", error: error.message });
  }
};

// Handler to create a new order
const createOrder = async (req, res) => {
  try {
    // Create a new order with data from the request body
    const order = await Order.create(req.body);
    
    // Return a success response with a 201 Created status
    return res.status(201).send({ message: "Order created" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in creating order", error: error.message });
  }
};

// Handler to update an existing order by its ID
const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the order by its ID and update it with the new data
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Order updated Successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in updating order", error: error.message });
  }
};

// Handler to delete an existing order by its ID
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the order by its ID and delete it
    const order = await Order.findByIdAndDelete(id);
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Order deleted Successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in deleting order", error: error.message });
  }
};

// Export the handler functions for use in other parts of the application
export {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
