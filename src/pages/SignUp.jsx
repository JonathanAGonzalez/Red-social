import { useState } from 'react';
import { SignUpValidation } from '../validation/validation';
import { signupFirebase } from '../firebase/auth/functions';
import InputComponent from '../components/InputComponent';

const SignUp = ({ signUp = signupFirebase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});


  const createAccount = async (e) => {
    e.preventDefault();
    setError({});
    try {
      const validation = SignUpValidation(email, password);
      if (!validation.isValid) {
        setError(validation.errors);
        return;
      }
      signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3>Crear cuenta</h3>
              <hr />

              <form onSubmit={createAccount} id="form" >

                <InputComponent
                  labelText='Correo Electronico:'
                  id='email'
                  type='email'
                  placeholder='Jona@jona.com'
                  value={email}
                  onChange={setEmail}
                  error={error.email}
                />

                <InputComponent
                  labelText='Contraseña:'
                  id='password'
                  type='password'
                  placeholder='Ingresá tu contraseña'
                  value={password}
                  onChange={setPassword}
                  error={error.password}
                />

                <input className='btn btn-primary' aria-label='Crear cuenta' type="submit" value="Crear cuenta" id='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SignUp;
