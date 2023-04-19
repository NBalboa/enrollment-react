import React, {useState} from 'react'
import "../css/admin_login.css";
import '../Styles.css'
import WmsuLogo from '../assets/wmsu_logo.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../CreateContext.js'

function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();        
        const admin = {
            username: email,
            password: password,
        }

        axios.post("http://localhost:3000/api/admin/login", admin)
        .then(res => {
            // console.log(res.data.errors)
            if(res.data.errors){
                let errorString = "";
                res.data.errors.forEach((error) => {
                  errorString += error.msg + "\n";
                });
                alert(errorString);
            }
            else if(res.data.error){
                alert(res.data.error);
            }
            else if(res.data.data.role === 'admin'){
              alert("Login Successful");
              localStorage.setItem("currentUser", JSON.stringify(res.data.data));
              navigate("/");
              // onLogin(res.data.data);
            }
            // else{
            //   alert("Something went wrong. Please try again later.")
            // }

        })
        .catch(err => {
            console.log(err);
        })



    };


    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={WmsuLogo} alt="Logo" className="logo" />
        </div>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={handleTogglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin