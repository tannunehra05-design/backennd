import { Router } from "express";
import {
  CreateMenu,
  UpdateMenu,
  DeleteMenu,
} from "../controller/menu.controller.js";
import validate from "../middleware/validate.middleware.js";
import { menuSchema } from "../schema/menu.Schema.js";
import upload from "../libs/multer.cjs";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Menu Route is working",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Error at server side",
    });
  }
});

router.post(
  "/create",
  upload.array("menuImages", 5),
  validate(menuSchema),
  CreateMenu,
);

router.put(
  "/update/:id",
  upload.array("menuImages", 5),
  validate(menuSchema),

  UpdateMenu,
);

router.delete("/delete/:id", DeleteMenu);
export default router;
