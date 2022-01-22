import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '../SignUp';

describe('SignUp', () => {
  describe('Layout', () => {
    test('Rendered correctly', () => {
      const { asFragment } = render(<SignUp />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('It must have a field to write email.', () => {
      render(<SignUp />);
      const inputEmail = screen.getByLabelText('Correo Electronico:');
      expect(inputEmail).toBeInTheDocument();
    });

    test('It must have a field to write password.', () => {
      render(<SignUp />);
      const inputPassword = screen.getByLabelText('Contraseña:');
      expect(inputPassword).toBeInTheDocument();
    });

    test('It must have a field to Submit.', () => {
      render(<SignUp />);
      const inputSubmit = screen.getByLabelText('Crear cuenta');
      expect(inputSubmit).toBeInTheDocument();
    });
  });
});
