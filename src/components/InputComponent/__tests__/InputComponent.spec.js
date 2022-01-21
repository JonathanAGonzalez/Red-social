import { fireEvent, render, screen } from '@testing-library/react';
import InputComponent from '../InputComponent';

describe('InputComponent', () => {
  describe('Layout', () => {
    test('should rendered correctly', () => {
      const { asFragment } = render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          placeholder="jona@jona.com"
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });

    test('should have label', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          placeholder="jona@jona.com"
        />
      );
      const label = screen.getByText('Correo Electronico:');
      expect(label).toBeInTheDocument();
    });

    test('should have input', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          placeholder="jona@jona.com"
        />
      );
      const input = screen.getByPlaceholderText('jona@jona.com');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Funcionality', () => {
    test('should acept propertie type', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          placeholder="jona@jona.com"
        />
      );
      const input = screen.getByPlaceholderText('jona@jona.com');
      expect(input.type).toBe('email');
    });

    test('should accept label text', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          placeholder="jona@jona.com"
        />
      );
      const labelText = screen.getByText('Correo Electronico:');
      expect(labelText).toHaveTextContent('Correo Electronico:');
    });

    test('should accept label id', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          placeholder="jona@jona.com"
        />
      );
      const labelText = screen.getByText('Correo Electronico:');
      expect(labelText.id).toBe('email');
    });

    test('should accept input value', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          value="jona@jona.com"
          placeholder="jona@jona.com"
        />
      );
      const input = screen.getByPlaceholderText('jona@jona.com');
      expect(input).toHaveValue('jona@jona.com');
    });

    test('should accept the default value of the property', () => {
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type=""
          value="jona@jona.com"
          placeholder="jona@jona.com"
        />
      );
      const input = screen.getByPlaceholderText('jona@jona.com');
      expect(input.type).toBe('text');
    });

    test('should accept onChange', () => {
      const onChangeMock = jest.fn();
      render(
        <InputComponent
          labelText="Correo Electronico:"
          id="email"
          type="email"
          value="jona@jona.com"
          placeholder="jona@jona.com"
          onChange={onChangeMock}
        />
      );
      const input = screen.getByPlaceholderText('jona@jona.com');

      fireEvent.change(input, {
        target: { value: 'jonathang@hotmail.com.ar' },
      });

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
