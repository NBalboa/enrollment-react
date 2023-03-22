import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import "../Styles.css";
import "../css/admission.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateForm() {
  const [profile, setProfile] = useState(null);
  const [previewProfile, setPreviewProfile] = useState(null);
  const [hide, setHide] = useState(false);
  const [sy, setSy] = useState("");
  const [admissionType, setAdmissionType] = useState("Regular");
  const [enrollmentStatus, setEnrollmentStatus] = useState("Undergraduate");
  const [program, setProgram] = useState(
    "Bachelor of Science in Computer Science"
  );
  const [semester, setSemester] = useState("1st Semester");
  const [studID, setStudID] = useState("");
  const [yearLevel, setYearLevel] = useState("1st");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("");
  const [nationality, setNationality] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [religion, setReligion] = useState("");
  const [tribe, setTribe] = useState("");
  const [disability, setDisability] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [cStreet, setCStreet] = useState("");
  const [cBarangay, setCBarangay] = useState("");
  const [cProvince, setCProvince] = useState("");
  const [cZipCode, setCZipCode] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cTelPhone, setCTelPhone] = useState("");
  const [pStreet, setPStreet] = useState("");
  const [pBarangay, setPBarangay] = useState("");
  const [pProvince, setPProvince] = useState("");
  const [pZipCode, setPZipCode] = useState("");
  const [pPhone, setPPhone] = useState("");
  const [pTelPhone, setPTelPhone] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherEdu, setFatherEdu] = useState("");
  const [fatherWork, setFatherWork] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherEdu, setMotherEdu] = useState("");
  const [motherWork, setMotherWork] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianRelationship, setGuardianRelationship] = useState("");
  const [guardianAddress, setGuardianAddress] = useState("");
  const [guardianContact, setGuardianContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentProfile, setCurrentProfile] = useState("");

  const [data, setData] = useState([]);

  const {id} = useParams();

  const handleData = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3000/api/admission/student/${id}`);
        console.log(`Student ID: ${id}`);
        const student = data[0]
        const date = new Date(student.dob);
        const htmlDate = date.toISOString().split("T")[0];

        setCurrentProfile(student.profile);
        setStudID(student.student_id);
        setSy(student.sy);
        setAdmissionType(student.type_of_admission);
        setEnrollmentStatus(student.enrollment_status);
        setProgram(student.program);
        setSemester(student.semester);
        setYearLevel(student.year_level);
        setFirstName(student.first_name);
        setLastName(student.last_name);
        setMiddleName(student.middle_name);
        setGender(student.gender);
        setDob(htmlDate);
        setPob(student.pob);
        setNationality(student.nationality);
        setCivilStatus(student.civil_status);
        setReligion(student.religion);
        setTribe(student.tribe);
        setDisability(student.disability);
        setScholarship(student.scholarship);
        setCStreet(student.current_street);
        setCBarangay(student.current_barangay);
        setCProvince(student.current_province);
        setCZipCode(student.current_zipcode);
        setCPhone(student.current_phone);
        setCTelPhone(student.current_telphone);
        setPStreet(student.permanent_street);
        setPBarangay(student.permanent_barangay);
        setPProvince(student.permanent_province);
        setPZipCode(student.permanent_zipcode);
        setPPhone(student.permanent_phone);
        setPTelPhone(student.permanent_telphone);
        setFatherName(student.f_fullname);
        setFatherEdu(student.f_edu);
        setFatherWork(student.f_occ);
        setMotherName(student.m_fullname);
        setMotherEdu(student.m_edu);
        setMotherWork(student.m_occ);
        setGuardianName(student.g_fullname);
        setGuardianRelationship(student.g_relationship);
        setGuardianAddress(student.g_address);
        setGuardianContact(student.g_mobile);
        if(student.username === null || student.password === null){
            setUsername('');
            setPassword('');
        }
        console.log(student)
    }
    catch(e){
        console.log(e)
    }
  }

  useEffect(() => {
    handleData();
  }, [])

  const handleHide = (e) => {
    setHide(e.target.checked);
  };

  const uploadProfile = (e) => {
    setProfile(URL.createObjectURL(e.target.files[0]));
    setPreviewProfile(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Profile " + profile);
    let convertedDob = new Date(dob)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    let formData = new FormData();
    if(profile !== null){
      formData.append("profile", previewProfile);
    }


    formData.append("student_id", studID);
    formData.append("first_name", firstName);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("gender", gender);
    formData.append("dob", convertedDob);
    formData.append("pob", pob);
    formData.append("nationality", nationality);
    formData.append("civil_status", civilStatus);
    formData.append("religion", religion);
    formData.append("tribe", tribe);
    formData.append("disability", disability);
    formData.append("scholarship", scholarship);
    formData.append("current_street", cStreet);
    formData.append("current_barangay", cBarangay);
    formData.append("current_province", cProvince);
    formData.append("current_zipcode", cZipCode);
    formData.append("current_phone", cPhone);
    formData.append("current_telphone", cTelPhone);
    formData.append("permanent_street", pStreet);
    formData.append("permanent_barangay", pBarangay);
    formData.append("permanent_province", pProvince);
    formData.append("permanent_zipcode", pZipCode);
    formData.append("permanent_phone", pPhone);
    formData.append("permanent_telphone", pTelPhone);
    formData.append("type_of_admission", admissionType);
    formData.append("enrollment_status", enrollmentStatus);
    formData.append("program", program);
    formData.append("semester", semester);
    formData.append("year_level", yearLevel);
    formData.append("f_fullname", fatherName);
    formData.append("f_edu", fatherEdu);
    formData.append("f_occ", fatherWork);
    formData.append("m_fullname", motherName);
    formData.append("m_edu", motherEdu);
    formData.append("m_occ", motherWork);
    formData.append("g_fullname", guardianName);
    formData.append("g_relationship", guardianRelationship);
    formData.append("g_address", guardianAddress);
    formData.append("g_mobile", guardianContact);
    formData.append("sy", sy);
    if(password === '' || confirmPassword === ''){
      await axios
        .put(`http://localhost:3000/api/admission/update/${id}`, formData)
        .then((res) => {
          console.log(res.data.data);
          handleData();
        });
    }
    else if(password === confirmPassword){
      formData.append("username", username);
      formData.append("password", password);
    }
    else{
      alert("Password does not match")
      return
    }
    

    await axios.put(`http://localhost:3000/api/admission/update/${id}`, formData)
    .then((res) => {
        console.log(res.data.data)
        handleData();
    })

    // fetch(`http://localhost:3000/api/admission/update/${id}`, {
    //   method: "PUT",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.data);
    //   });
  };
  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Admission"} />
          <div className="page__container">
            <div className="page__row">
              <h1 className="admission__title">
                Western Mindanao State University
              </h1>
              <h2 className="admission__subtitle">Admission Form</h2>
              <form onSubmit={handleUpdate}>
                <div className="official">
                  <p className="official__title">Student's Personal Data</p>
                  <p className="official__subtitle">
                    To be filled by WMSU addmiting official:
                  </p>
                  <div className="student__status">
                    <p className="colleges">College of WMSU PAGADIAN</p>
                    <label className="official__input">
                      School Year:
                      <input
                        type="text"
                        value={sy}
                        onChange={(e) => setSy(e.target.value)}
                      />
                    </label>
                    <div className="student__profile">
                      {/* {profile === null ? {src:`http://localhost/${currentProfile}`} : false } */}
                      {/* <img className="student__photo"  {profile === null}/> */}
                      {profile === null ? (
                        <img
                          className="student__photo"
                          src={`http://localhost:3000/${currentProfile}`}
                        />
                      ) : (
                        <img className="student__photo" src={profile} />
                      )}
                      <input
                        type="file"
                        id="profile"
                        hidden
                        onChange={uploadProfile}
                      />
                      <label htmlFor="profile" className="student__chooser">
                        Choose Profile
                      </label>
                    </div>
                  </div>
                  <div className="student__type">
                    <div className="admission__type">
                      <label>Type of Admission</label>
                      <select
                        id="admission"
                        value={admissionType}
                        onChange={(e) => setAdmissionType(e.target.value)}
                      >
                        <option value="Regular">Regular</option>
                        <option value="Irregular">Irregular</option>
                      </select>
                    </div>
                    <div className="enrollment_status">
                      <label>Enrollment Status</label>
                      <select
                        id="enrollment"
                        value={enrollmentStatus}
                        onChange={(e) => setEnrollmentStatus(e.target.value)}
                      >
                        <option>Undergraduate</option>
                        <option>Graduate</option>
                      </select>
                    </div>
                    <div className="programs">
                      <label>Program</label>
                      <select
                        id="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                      >
                        <option value="Bachelor of Science in Computer Science">
                          Bachelor of Science in Computer Science
                        </option>
                        <option value="Bachelor of Science in Social Work">
                          Bachelor of Science in Social Work
                        </option>
                        <option value="Bachelor of Science in Criminology">
                          Bachelor of Science in Criminology
                        </option>
                      </select>
                    </div>
                    <div className="semestral">
                      <label>Semester</label>
                      <select
                        id="sem"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                      >
                        <option value="1st Semester">1st Semester</option>
                        <option value="2nd Semester">2nd Semester</option>
                      </select>
                    </div>
                  </div>
                  <div className="student__more">
                    <label className="student__label">
                      Student I.D. Number
                      <input
                        className="student__input"
                        value={studID}
                        onChange={(e) => setStudID(e.target.value)}
                      />
                    </label>
                    <div className="student__select">
                      <label>Year Level</label>
                      <select
                        id="year__level"
                        value={yearLevel}
                        onChange={(e) => setYearLevel(e.target.value)}
                      >
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                      </select>
                    </div>
                  </div>
                  <div className="personal__details">
                    <h3 className="details__title">Personal Details</h3>
                    <div className="fullname">
                      <div className="student__label--column">
                        <label className="student__info">Last Name</label>
                        <input
                          type="text"
                          placeholder='ex. "Dela Cruz"'
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">First Name</label>
                        <input
                          type="text"
                          placeholder='ex. "Juan"'
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">Middle Name</label>
                        <input
                          type="text"
                          placeholder='ex. "Panday"'
                          value={middleName}
                          onChange={(e) => setMiddleName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="two__details">
                      <div className="student__select">
                        <label>Gender</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">Date of Birth</label>
                        <input
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="four__details">
                      <div className="student__label--column">
                        <label className="student__info">Place of Birth</label>
                        <input
                          type="text"
                          placeholder='ex. "Sta. Lucia, Pagadian City"'
                          value={pob}
                          onChange={(e) => setPob(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">Nationality</label>
                        <input
                          type="text"
                          placeholder='ex. "Filipino"'
                          value={nationality}
                          onChange={(e) => setNationality(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">Civil Status</label>
                        <input
                          type="text"
                          placeholder='ex. "Single/Married"'
                          value={civilStatus}
                          onChange={(e) => setCivilStatus(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">Religion</label>
                        <input
                          type="text"
                          placeholder='ex. "Roman Catholic"'
                          value={religion}
                          onChange={(e) => setReligion(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="three__details">
                      <div className="student__label--column">
                        <label className="student__info">Ethnicity/Tribe</label>
                        <input
                          type="text"
                          placeholder='ex. "Subanen"'
                          value={tribe}
                          onChange={(e) => setTribe(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">
                          Disability(if any)
                        </label>
                        <input
                          type="text"
                          placeholder='ex. "Blind"'
                          value={disability}
                          onChange={(e) => setDisability(e.target.value)}
                        />
                      </div>
                      <div className="student__label--column">
                        <label className="student__info">Scholarship</label>
                        <input
                          type="text"
                          placeholder='ex. "Dela Cruz"'
                          value={scholarship}
                          onChange={(e) => setScholarship(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="addresses">
                    <div className="current__address">
                      <h3 className="details__title">
                        Current Address (City Address)
                      </h3>
                      <div className="three_details--column">
                        <input
                          type="text"
                          placeholder="address"
                          className="long__input"
                          value={cStreet}
                          onChange={(e) => setCStreet(e.target.value)}
                        />
                        <label className="bottom__label--center">
                          House or Street No.
                        </label>
                        <input
                          type="text"
                          placeholder="address"
                          className="long__input"
                          value={cBarangay}
                          onChange={(e) => setCBarangay(e.target.value)}
                        />
                        <label className="bottom__label--center">
                          Barangay, Town, City
                        </label>
                        <input
                          type="text"
                          placeholder="address"
                          className="long__input"
                          value={cProvince}
                          onChange={(e) => setCProvince(e.target.value)}
                        />
                        <label className="bottom__label--center">
                          Province, Country
                        </label>
                      </div>
                      <div className="three__details">
                        <div className="student__label--column">
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={cZipCode}
                            onChange={(e) => setCZipCode(e.target.value)}
                          />
                          <label className="student__info--center">
                            Zip Code
                          </label>
                        </div>
                        <div className="student__label--column">
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={cPhone}
                            onChange={(e) => setCPhone(e.target.value)}
                          />
                          <label className="student__info--center">
                            Mobile Phone No.
                          </label>
                        </div>
                        <div className="student__label--column">
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={cTelPhone}
                            onChange={(e) => setCTelPhone(e.target.value)}
                          />
                          <label className="student__info--center">
                            Telephone No.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="permanent__address">
                      <div className="with__cb">
                        <input
                          type="checkbox"
                          checked={hide}
                          onChange={handleHide}
                        />
                        <h3 className="details__title">
                          Permanent Address (City Address)
                        </h3>
                        <p>
                          (<i>click checkbox if the inform is the same above</i>
                          )
                        </p>
                      </div>

                      <div className="three_details--column">
                        <input
                          type="text"
                          placeholder="address"
                          className="long__input"
                          value={pStreet}
                          onChange={(e) => setPStreet(e.target.value)}
                        />
                        <label className="bottom__label--center">
                          House or Street No.
                        </label>
                        <input
                          type="text"
                          placeholder="address"
                          className="long__input"
                          value={pBarangay}
                          onChange={(e) => setPBarangay(e.target.value)}
                        />
                        <label className="bottom__label--center">
                          Barangay, Town, City
                        </label>
                        <input
                          type="text"
                          placeholder="address"
                          className="long__input"
                          value={pProvince}
                          onChange={(e) => setPProvince(e.target.value)}
                        />
                        <label className="bottom__label--center">
                          Province, Country
                        </label>
                      </div>
                      <div className="three__details">
                        <div className="student__label--column">
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={pZipCode}
                            onChange={(e) => setPZipCode(e.target.value)}
                          />
                          <label className="student__info--center">
                            Zip Code
                          </label>
                        </div>
                        <div className="student__label--column">
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={pPhone}
                            onChange={(e) => setPPhone(e.target.value)}
                          />
                          <label className="student__info--center">
                            Mobile Phone No.
                          </label>
                        </div>
                        <div className="student__label--column">
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={pTelPhone}
                            onChange={(e) => setPTelPhone(e.target.value)}
                          />
                          <label className="student__info--center">
                            Telephone No.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="parents">
                    <h3 className="details__title">Parents</h3>
                    <div className="parents__info">
                      <div className="not__two--details--column">
                        <label className="parent__label label--bold">
                          Father's Name
                        </label>
                        <input
                          type="text"
                          className="parent__input"
                          value={fatherName}
                          onChange={(e) => setFatherName(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">
                          Educational Attainement
                        </label>
                        <input
                          type="text"
                          className="parent__input"
                          value={fatherEdu}
                          onChange={(e) => setFatherEdu(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">Occupation</label>
                        <input
                          type="text"
                          className="parent__input"
                          value={fatherWork}
                          onChange={(e) => setFatherWork(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label label--bold">
                          Mother's Name
                        </label>
                        <input
                          type="text"
                          className="parent__input"
                          value={motherName}
                          onChange={(e) => setMotherName(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">
                          Education Attainment
                        </label>
                        <input
                          type="text"
                          className="parent__input"
                          value={motherEdu}
                          onChange={(e) => setMotherEdu(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">Occupation</label>
                        <input
                          type="text"
                          className="parent__input"
                          value={motherWork}
                          onChange={(e) => setMotherWork(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="guardian">
                    <h3 className="details__title">Guardian</h3>
                    <div className="guardian__details">
                      <div className="not__two--details--column">
                        <label className="parent__label label--bold">
                          Guardian's Name
                        </label>
                        <input
                          type="text"
                          className="parent__input"
                          value={guardianName}
                          onChange={(e) => setGuardianName(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">Relationship</label>
                        <input
                          type="text"
                          className="parent__input"
                          value={guardianRelationship}
                          onChange={(e) =>
                            setGuardianRelationship(e.target.value)
                          }
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">Address</label>
                        <input
                          type="text"
                          className="parent__input"
                          value={guardianAddress}
                          onChange={(e) => setGuardianAddress(e.target.value)}
                        />
                      </div>
                      <div className="not__two--details--column">
                        <label className="parent__label">
                          Mobile No./Telephone No.
                        </label>
                        <input
                          type="text"
                          className="parent__input"
                          value={guardianContact}
                          onChange={(e) => setGuardianContact(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="guardian">
                    <h3 className="details__title">Create a Student Account</h3>
                    <div className="not__two--details--column">
                      <label className="parent__label">Username</label>
                      <input
                        type="text"
                        className="parent__input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="not__two--details--column">
                      <label className="parent__label">Password</label>
                      <input
                        type="text"
                        className="parent__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="not__two--details--column">
                      <label className="parent__label">Confirm Password</label>
                      <input
                        type="text"
                        className="parent__input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Update"
                    className="red__btn--right"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
