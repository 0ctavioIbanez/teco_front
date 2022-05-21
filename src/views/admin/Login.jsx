import { form } from "../../assets/helpers/utilities";
import { message } from "../../assets/helpers/Message";

const Login = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    message.loading("Un momentico");
    const data = form.build(e.target)
    console.log(data);
  }
  return (
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Bienvenido de nuevo</h1>
          <p className="lead">
            Inicia sesión para continuar
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control form-control-lg" type="email" name="email" placeholder="Ingresa tu email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input className="form-control form-control-lg" type="password" name="password" placeholder="Ingresa tu password" required />
                  <small>
                    <a href="index.html">Olvidaste tu contraseña?</a>
                  </small>
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-lg btn-primary px-4">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login