import React, {useState} from 'react'
import TopMenu from '../components/TopMenu'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import '../css/settings.css'
import "../Styles.css";
import axios from 'axios'


function Settings() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleAddAdmin = async function (e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const admin = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/admin/add_admin",
        admin
      );
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Dashboard"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <h2>Create an Account</h2>
              <p>Enter the Details Below</p>
              <form className="admin" onSubmit={handleAddAdmin}>
                <div className="name__section">
                  <h3 className="name__title">Name</h3>
                  <div className="name__details">
                    <div className="name__input">
                      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                      <label>First Name</label>
                    </div>
                    <div className="name__input">
                      <input type="text" value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                      />
                      <label>Middle Name</label>
                    </div>
                    <div className="name__input">
                      <input type="text" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div className="account__section">
                    <h3 className="account__title">Account</h3>
                    <div className="account__details">
                      <div className="account__input">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                      </div>
                      <div className="account__input">
                        <label>Password</label>
                        <div className="password">
                          <input type={showPassword ? "text" : "password"}
                          value={password} onChange={(e) => setPassword(e.target.value)}
                          />
                          <button onClick={togglePassword}>
                            <i
                              className={
                                showPassword
                                  ? "fa-solid fa-eye"
                                  : "fa-solid fa-eye-slash"
                              }
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="account__input">
                        <label>Confirm Password</label>
                        <div className="password">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <button onClick={toggleConfirmPassword}>
                            <i
                              className={
                                showConfirmPassword
                                  ? "fa-solid fa-eye"
                                  : "fa-solid fa-eye-slash"
                              }
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" value="Add Admin" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings