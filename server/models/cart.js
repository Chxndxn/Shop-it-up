const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  products: [
    { product: { type: Schema.Types.ObjectId, ref: "Product", required: true }, 
      quantity: { type: Number, required: true }
    }
  ],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  size: { type: Schema.Types.Mixed, default: undefined },
  color: { type: Schema.Types.Mixed, default: undefined },
}, { timestamps: true }
);

const virtual = cartSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
