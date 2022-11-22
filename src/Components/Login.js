import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Register.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [status, SetStatus] = useState("");
  const [psweror, Setpsw] = useState("");
  const [usereror, Seteror] = useState("");
  let navigate = useNavigate();

  const Login = () => {
    //   Cek username
    if (username === "") {
      Seteror("Silahkan isi username anda");
      // Cek Password
    } else if (password === "") {
      Setpsw("SIlahkan isi Passwordnya juga");
    } else {
      axios
        .post("http://localhost:3001/Login", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.data.message) {
            SetStatus(response.data.message);
          } else {
            sessionStorage.setItem("token", response.data);
            navigate("/dashboard");
          }
        });
    }
  };

  useEffect(
    () => {
      if (sessionStorage.getItem("token") === null) {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    },
    { navigate }
  );
  return (
    <>
      <div className="box text-light">
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
