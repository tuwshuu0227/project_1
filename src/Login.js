import bk from "./image/pexels.jpg";

function Login({ status, setStatus }) {
    function statusHandler(e) {
        e.preventDefault();
        setStatus(!status);
    }

  return (
    <div className="login-body">
      <div className="container">
        <div className="left">
          <img src={bk} />
        </div>
        <div className="right">
          <form>
            <h1 className="title mb-3">Нэвтрэх</h1>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fas fa-user"></i>
              </span>
              <input className="input form-control" placeholder="Нэвтрэх нэр" />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fas fa-unlock-alt"></i>
              </span>
              <input className="input form-control" placeholder="Нууц үг" />
              <span className="input-group-text">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
            <button type="button" className="btn btn-primary mb-3"
            onClick={statusHandler} >
              Нэвтрэх
            </button>
            <p className="forgot">Нууц үгээ мартсан ?</p>
          </form>
          <button className="btn btn-light">Холбоо барих</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
