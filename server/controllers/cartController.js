const Cart = require("../models/cart");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getCartByUser = async (req, res) => {
	try {
		const user = req.query.user;
		if (user) {
			const cart = await Cart.find({ user: new ObjectId(user) }).populate(
				"products.product"
			);
			if (cart) {
				res.status(200).json(cart);
			} else {
				res.status(404).json({
					message: "No items in the cart for the user.",
				});
			}
		}
	} catch (err) {
		console.error(`Error fetching cart by user: ${err}`);
		res.status(500).json({ error: err.message || err });
	}
};

exports.addToCart = async (req, res) => {
	try {
		const cartItem = req.body;
		const userId = new ObjectId(cartItem.user);
		const productId = new ObjectId(cartItem.products.product);
		const quantity = cartItem.products.quantity;
		let cart = await Cart.findOne({ user: userId });
		if (cart) {
			const productIndex = cart.products.findIndex((item) =>
				item.product.equals(productId)
			);
			if (productIndex > -1) {
				cart.products[productIndex].quantity += quantity;
			} else {
				cart.products.push({
					product: productId,
					quantity: quantity,
				});
			}
			cart = await cart.save();
			cart = await cart.populate("products.product")
		} else {
			cart = await Cart.create({
				user: userId,
				products: [{ product: productId, quantity: quantity }],
			});
			cart = await cart.populate("products.product");
		}
		res.status(200).json(cart);
	} catch (err) {
		console.error(`Error adding to cart: ${err}`);
		res.status(500).json({ error: err.message || err });
	}
};

exports.updateCart = async (req, res) => {
	try {
		const cartId = req.params.id;
		const cartItems = req.body;
		if (cartId) {
			const updatedCart = await Cart.findByIdAndUpdate(
				cartId,
				cartItems,
				{
					new: true,
				}
			);
			if (updatedCart) {
				const result = await updatedCart.populate("product");
				res.status(200).json(result);
			} else {
				res.status(404).json({
					message: "No items in the cart to update.",
				});
			}
		}
	} catch (err) {
		console.error(`Error updating the cart: ${err}`);
		res.status(500).json({ error: err.message || err });
	}
};

exports.deleteFromCart = async (req, res) => {
	try {
		const cartId = req.params.id;
		if (cartId) {
			const deletedCart = await Cart.findByIdAndDelete(cartId);
			if (deletedCart) {
				res.status(200).json(deletedCart);
			} else {
				res.status(404).json({
					message: "No items in the cart to delete.",
				});
			}
		}
	} catch (err) {
		console.error(`Error deleting from cart: ${err}`);
		res.status(500).json({ error: err.message || err });
	}
};
