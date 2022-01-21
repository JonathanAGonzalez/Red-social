import { useState } from 'react';
import InputComponent from '../components/InputComponent';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = (e) => {
    e.preventDefault();
    setEmail('')
    setPassword('')
    console.log('Enviado');
  }


  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3>Crear cuenta</h3>
              <hr />

              <form onSubmit={createAccount}>

                <InputComponent
                  labelText='Correo Electronico:'
                  id='email'
                  type='email'
                  placeholder='Jona@jona.com'
                  value={email}
                  onChange={setEmail} />

                <InputComponent
                  labelText='Contraseña:'
                  id='password'
                  type='password'
                  placeholder='Ingresá tu contraseña'
                  value={password}
                  onChange={setPassword} />

                <input className='btn btn-primary' type="submit" value="Crear cuenta" id='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SignUp;
