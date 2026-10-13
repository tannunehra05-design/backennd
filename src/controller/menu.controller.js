import Menu from "../model/menu.model.js";
export const CreateMenu = async (req, res) => {
  try {
    const { name, price, description, category, isAvailable, image } = req.body;

    const imagePaths = req.files ? req.files.map((file) => file.path) : [];

    const newMenu = new Menu({
      name,
      price,
      description,
      category,
      isAvailable,
      image: imagePaths,
    });
    const result = await newMenu.save();

    return res.status(201).json({
      success: true,
      message: "Menu created successfully",
      result,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(400).json({
      success: false,
      message: "Error at server side",
    });
  }
};
export const UpdateMenu = async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateMenu = await Menu.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "Menu updated successfully",
      UpdateMenu,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error at server side",
    });
  }
};

export const DeleteMenu = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteMenu = await Menu.findByIdAndDelete(id);
    if (!deleteMenu) {
      return res.status(404).json({
        success: false,
        message: "Menu not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Menu deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error at server side",
    });
  }
};
