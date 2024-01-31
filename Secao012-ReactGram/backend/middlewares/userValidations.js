const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome eh obrigatorio!")
      .isLength({ min: 3 })
      .withMessage("O nome precisa de no minimo 3 caracteres"),
    body("email")
      .isString()
      .withMessage("O e-mail eh obrigatorio")
      .isEmail()
      .withMessage("Insira um e-mail valido"),
    body("password")
      .isString()
      .withMessage("A senha eh obrigatoria")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no minimo 5 caracteres"),
    body("confirmpassword")
      .isString()
      .withMessage("A Confirmacao de senha eh obrigatoria")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas nao sao iguais.");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail eh obrigatorio")
      .isEmail()
      .withMessage("Insira um e-mail valido"),
    body("password").isString().withMessage("A senha eh obrigatoria"),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
};
