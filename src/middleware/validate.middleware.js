import { success } from "zod";

const validate = (schema) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);

      const result = await schema.safeParse(req.body);
      console.log("result");

      if (!result.success) {
        const errors = {};

        result.error.issues.forEach((items) => {
          errors[items.path.join(".")] = items.message;
        });
        console.log(errors);
        return res.status(400).json({
          success: false,
          message: "wrong data",
          errors,
        });
      }
      next();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        success: false,
        message: "Error at server side",
      });
    }
  };
};
export default validate;
