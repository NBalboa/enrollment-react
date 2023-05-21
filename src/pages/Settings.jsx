import React, {useState} from 'react'
import TopMenu from '../components/TopMenu'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import '../css/settings.css'
import "../Styles.css";
import axios from 'axios'
import WmsuLogo from '../assets/wmsu_logo.jpg'


function Settings() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [previewProfile, setPreviewProfile] = useState(null);

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  }

  const uploadProfile = (e) => {
    setProfile(URL.createObjectURL(e.target.files[0]));
    setPreviewProfile(e.target.files[0]);
    
  };

  const handleAddAdmin = async function (e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create a new FormData object
    const formData = new FormData();

    // Append the image file
    formData.append("image", previewProfile);

    // Append the form data
    formData.append("first_name", firstName);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("username", username);
    formData.append("password", password);

    // Send the POST request with the FormData object
    try {
      const res = await axios.post(
        "http://localhost:3000/api/admin/add_admin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(res.data.errors)

      if (res.data.errors) {
        let errorString = "";
        res.data.errors.forEach((error) => {
          errorString += error.msg + "\n";
        });
        alert(errorString);
      }

      alert(res.data.data)

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <h2>Create an Account</h2>
              <p>Enter the Details Below</p>
              <form className="admin" onSubmit={handleAddAdmin}>
                <div className="profile__section">
                  <h3>Profile</h3>
                  <div className="profile__section--wrapper">
                    <img src={profile} />
                  </div>
                  <input type="file" id="profile" onChange={uploadProfile} hidden />
                  <label htmlFor="profile" className="profile__chooser--admin">
                    Choose Profile
                  </label>
                </div>
                <div className="name__section">
                  <h3 className="name__title">Name</h3>
                  <div className="name__details">
                    <div className="name__input">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label>First Name</label>
                    </div>
                    <div className="name__input">
                      <input
                        type="text"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                      />
                      <label>Middle Name</label>
                    </div>
                    <div className="name__input">
                      <input
                        type="text"
                        value={lastName}
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
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="account__input">
                        <label>Password</label>
                        <div className="password">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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