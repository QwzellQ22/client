import { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Register.css";
import Axios from "axios";

axios.defaults.withCredentials = true;

function Register() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [nama, Setnama] = useState("");
  const [usereror, Seteror] = useState("");
  const [psweror, Setpsw] = useState("");
  let navigate = useNavigate();

  const Register = () => {
    //   Cek username
    if (username === "") {
      Seteror("Silahkan isi username anda");
      // Cek Password
    } else if (password === "") {
      Setpsw("Silahkan isi Passwordnya juga");
    } else if (nama === "") {
      Setnama("silahkan isi Nama anda");
    } else {
      // Proses Register ketika data sudah Tervalidasi
      // console.log(username, password, nama);
      Axios.post("http://localhost:3001/register", {
        username: username,
        password: password,
        nama: nama,
      });
    }
  };
  return (
    <>
      <div className="box">
        <div className="container py-5">
          <h1 className="text-light"> Register</h1>
          <p className="text-light">Please Log in to autenticate</p>
          <hr />
          <div className="form-group text-light">
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
          <div className="form-group text-light">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
            <p className=" text-danger p-2 m-3 ">{psweror}</p>
          </div>
          <div className="form-group text-light">
            <label>NAMA</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                Setnama(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary mt-3" onClick={Register}>
              Register
            </button>
          </div>
          <p className="text-muted">
            Dont have account? Please Click this <Link to="/">Create New Account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
