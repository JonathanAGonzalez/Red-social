import validate from 'validate.js';

export const SignUpValidation = (email, password) => {
  const validationErrors = {};
  const validateErrors = Object.keys(validationErrors).length === 0;

  //Validate campus
  const validateEmail = validate.single(email, { presence: true, email: true });

  const ValidatePassword = validate.single(password, {
    presence: true,
    length: { minimum: 6, maximum: 30 },
  });

  if (validateEmail) {
    validationErrors.email = 'El correo electronico no es valido.';
  }
  if (ValidatePassword) {
    validationErrors.password =
      'La contraseña debe ser entre 6 y 30 caracteres.';
  }

  return { isValid: validateErrors, errors: validationErrors };
};
