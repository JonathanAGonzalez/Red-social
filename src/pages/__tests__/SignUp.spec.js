import { render } from '@testing-library/react';

import SignUp from '../SignUp';

describe('SignUp', () => {
  describe('Layout', () => {
    test('Rendered correctly', () => {
      const { asFragment } = render(<SignUp />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('It must have a field to write email.', () => {
      const { container } = render(<SignUp />);
      const inputEmail = container.querySelector('#email');
      expect(inputEmail).toBeInTheDocument();
    });

    test('It must have a field to write password.', () => {
      const { container } = render(<SignUp />);
      const inputPassword = container.querySelector('#password');
      expect(inputPassword).toBeInTheDocument();
    });

    test('It must have a field to Submit.', () => {
      const { container } = render(<SignUp />);
      const inputSubmit = container.querySelector('#submit');
      expect(inputSubmit).toBeInTheDocument();
    });
  });
});
