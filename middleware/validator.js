const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "name is required").notEmpty(),
  check("last_name", "lastname is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password should be between 6 and 20 caracteres").isLength({
    min: 6,
    max: 20,
  }),
];

exports.loginRules = () => [
  check("email", "name is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check(
    "password",
    "password must be between 6 character and 20 character"
  ).isLength({
    min: 6,
    max: 20,
  }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};
