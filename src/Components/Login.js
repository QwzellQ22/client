import { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Register.css";

function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [usereror, Seteror] = useState("");
  const [psweror, Setpsw] = useState("");

  const Login = () => {
    //   Cek username
    if (username === "") {
      Seteror("Silahkan isi username anda");
      // Cek Password
    } else if (password === "") {
      Setpsw("SIlahkan isi Passwordnya juga");
    }
  };
  return (
    <>
      <div className="box">
        <div className="container py-5">
          <h1 className="text-muted"> Login</h1>
          <p className="text-muted">Please Log in to autenticate</p>
          <hr />
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                SetUsername(e.target.value);
              }}
            />
            <p className=" text-danger p-2 m-3"> {usereror}</p>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
          </div>
          <p className=" text-danger p-2 m-3 ">{psweror}</p>
          <div className="form-group">
            <button className="btn btn-primary mt-3" onClick={Login}>
              Login
            </button>
          </div>
          <p className="text-muted">
            Dont have account? Please Click this <Link to="/register">Registration</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
