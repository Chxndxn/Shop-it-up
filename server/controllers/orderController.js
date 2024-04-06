const Order = require("../models/order");

exports.getOrdersByUser = async (req, res) => {
  try {
    const user = req.query.user;
    if (user) {
      const ordersList = await Order.find({ user: user });
      if (ordersList.length > 0) {
        res.status(200).json(ordersList);
      } else {
        res.status(404).json({ error: "No orders found" });
      }
    }
  } catch (err) {
    console.error(`Error fetching orders for the user: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const orderDetails = req.body;
    if (orderDetails) {
      const order = await Order.create(orderDetails);
      res.status(201).json(order);
    }
  } catch (err) {
    console.error(`Error creating a new order: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderDetails = req.body;
    if (orderId) {
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        orderDetails,
        { new: true }
      );
      if (updatedOrder) {
        res.status(200).json(updatedOrder);
      } else {
        res.status(404).json({ error: "No orders found" });
      }
    }
  } catch (err) {
    console.error(`Error updating an order: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (orderId) {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      if (deletedOrder) {
        res.status(200).json(deletedOrder);
      } else {
        res.status(404).json({ error: "No orders found" });
      }
    }
  } catch (err) {
    console.error(`Error deleting an order: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};
