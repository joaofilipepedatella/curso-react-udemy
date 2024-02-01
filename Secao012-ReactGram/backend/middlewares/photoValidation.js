const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O titulo eh obrigatorio")
      .isString()
      .withMessage("O titulo eh obrigatorio")
      .isLength({ min: 3 })
      .withMessage("O titulo precisa ter no minimo 3 caracteres."),

    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem eh obrigatoria");
      }
      return true;
    }),
  ];
};

module.exports = {
  photoInsertValidation,
};
