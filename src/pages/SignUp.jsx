import InputComponent from '../components/InputComponent';
import inputs from '../data/inputs';
const SignUp = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3>Crear cuenta</h3>
              <hr />
              <form>
                {inputs.map((input) => (
                  <InputComponent key={input.id} {...input} />
                ))}
                <input className='btn btn-primary' type="submit" value="Crear cuenta" id='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
