import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  console.log("errors",errors.errors);
  if (!errors.isEmpty())
    return res.status(400).json({
      message: errors.array()[0].msg,
    });
 console.log("validate2")
  next();
};

export default { validate };
