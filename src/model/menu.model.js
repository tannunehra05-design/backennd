import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 250,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      required: true,
      enums: {
        values: ["All", "breakfast", "lunch", "dinner", "snacks", "beverages"],
        message: "{VALUE} is not supported",
      },
    },
    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
