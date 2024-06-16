import Order from "../models/order.model.js";


const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find({});
      return res.status(200).send(orders);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Error in getting orders", error: error.message });
    }
  };
  
  const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findById(id);
      return res.status(200).send(order);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Error in getting order", error: error.message });
    }
  };
  
  const createOrder = async (req, res) => {
    try {
      const order = await Order.create(req.body);
      return res.status(201).send({ message: "Order created" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Error in creating order", error: error.message });
    }
  };
  
  const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).send({ message: "Order updated Successfully" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Error in updating order", error: error.message });
    }
  };
  
  const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByIdAndDelete(id);
      return res.status(200).send({ message: "Order deleted Successfully" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Error in deleting order", error: error.message });
    }
  };


  export {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
  }