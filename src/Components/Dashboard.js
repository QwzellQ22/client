const { useEffect } = require("react");
const { jwt_decode } = require("react");
const { useNavigate } = require("react-router-dom");

function Dashboard() {
  let navigate = useNavigate();
  var username;
  if (sessionStorage.getItem("token") === null) {
    username = "";
  } else {
    var token = sessionStorage.getItem("token");
    var decoded = jwt_decode(token);
    username = decoded.username;
  }

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  useEffect(
    () => {
      if (sessionStorage.getItem("token") === null) {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    },{ navigate } );

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
          <h3 className="text-muted"> Dashboard</h3>
          <div className="">
            <ul className=" navbar-nav me-auto">
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-light">
        <div className="container py-5">
          Selamat Datang,<b>{username}</b>!
          <p>
            ini adalah halaman Dashboard implementasi login dan register menggunakan React-js
            ExpressJS-Mysql
          </p>
          <blockquote>
            harapannya dengan pembelajaran ini perserta didik sudah mampu untuk membuat dan
            mengimplementasikan
          </blockquote>
        </div>
      </div>
      <div className=" container-fluid fixed-bottom py-3 text-center bg-secondary text-light">
        Copyright &copy; Iqbal Alfarisi A.P - 2022
      </div>
    </>
  );
}

export default Dashboard;
