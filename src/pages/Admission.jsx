import React, {useState, useEffect} from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import "../Styles.css"
import "../css/admission.css"
import shortUUID from 'short-uuid'
import axios from 'axios'


function Admission() {
    // #region constant variables in Addmission
    const [profile, setProfile] = useState(null);
    const [previewProfile, setPreviewProfile] = useState(null);
    const [hide, setHide] = useState(false);
    const [sy, setSy] = useState("");
    const [admissionType, setAdmissionType] = useState("Regular");
    const [enrollmentStatus, setEnrollmentStatus] = useState("Undergraduate");
    const [program, setProgram] = useState("");
    const [semester, setSemester] = useState("");
    const [studID, setStudID] = useState("");
    const [yearLevel, setYearLevel] = useState("1st");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [gender, setGender] = useState("Male");
    const [dob, setDob] = useState("");
    const [pob, setPob] = useState("");
    const [nationality, setNationality] = useState("Philippines");
    const [civilStatus, setCivilStatus] = useState("Single");
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
    const [countryData, setCountryData] = useState([]);
    const [acad, setAcad] = useState([]);
    const [sems, setSems] = useState([]);
    // #endregion
    const [errors, setErrors] = useState([]);

    const [programsOpen, setProgramOpen] = useState([]);

    const getProgramsOpen = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/program/get_programs_open");
        setProgramOpen(res.data.data);
      }
      catch (error) {
        console.log(error);
      }
    }


    const generateID = (e) => {
      e.preventDefault()

      if(!studID){
        const currentYear = new Date().getFullYear();
        const lastTwoDigits = currentYear.toString().slice(-2);

        const uniqueId = "ADMITTED_ID-" + shortUUID.generate() + lastTwoDigits;

        setStudID(uniqueId);
      }
    }

    const getCountries = async () => {

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countryData = await response.json();
        setCountryData(countryData);

      }
      catch (error) {
        console.log(error);
      }
    }

    

    const getOpenAcademicYear = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/enrollment/get_enrollment_open");
        setAcad(res.data.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    const handleAcadYear = (e) => {
      e.preventDefault();
      setSy(e.target.value);

      getSemOpen(e.target.value);

    }
    const getSemOpen = async (ay) => {
      if(ay === ""){
        setSems([]);
        setSemester("");
        return;
      } 
      try {
        const res = await axios.get("http://localhost:3000/api/enrollment/get_sem_open/" + ay);
        console.log(res.data.data);
        setSems(res.data.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    // useEffect(() => {
    // }, [])

    useEffect(() => {
      getCountries();
      getOpenAcademicYear();
      getProgramsOpen();
    }, [])

    // useEffect(() => { 
    // }, [])

    const handleHide = (e) => {
      setHide(e.target.checked);
    }

    const isDisplay = (hide) => {

      if (hide) {
        return "three_details--column display-none";
      } else {
        return "three_details--column";
      }

    }

    const uploadProfile = (e) => {
        setProfile(URL.createObjectURL(e.target.files[0]))
        setPreviewProfile(e.target.files[0])
    }

    const handleAdmit = (e) => {
      e.preventDefault()
      let convertedDob = ""
      if(dob){
        convertedDob = new Date(dob)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
      }

      let formData = new FormData();
      // #region form data

      formData.append("profile", previewProfile);
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

      if(hide){
        formData.append("permanent_street", cStreet);
        formData.append("permanent_barangay", cBarangay);
        formData.append("permanent_province", cProvince);
        formData.append("permanent_zipcode", cZipCode);
        formData.append("permanent_phone", cPhone);
        formData.append("permanent_telphone", cTelPhone);
      }
      else{
        formData.append("permanent_street", pStreet);
        formData.append("permanent_barangay", pBarangay);
        formData.append("permanent_province", pProvince);
        formData.append("permanent_zipcode", pZipCode);
        formData.append("permanent_phone", pPhone);
        formData.append("permanent_telphone", pTelPhone);
      }
      
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
      // #endregion
      fetch("http://localhost:3000/api/admission/admit", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.errors){
            let errorString = ""
            data.errors.forEach((error) => {
              errorString += error.msg + "\n";

            })
            alert(errorString)
          }
          else {
            alert(data.data)
          }
        });
  }
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
                <form onSubmit={handleAdmit}>
                  <div className="official">
                    <p className="official__title">Student's Personal Data</p>
                    <p className="official__subtitle">
                      To be filled by WMSU addmiting official:
                    </p>
                    <p className="official__subtitle">
                      Required field are mark (
                      <span className="required">*</span>)
                    </p>
                    <div className="student__status">
                      <p className="colleges">College of WMSU PAGADIAN</p>
                      <label className="official__input">
                        School Year:
                        <select
                          style={{ padding: "4px 12px", marginLeft: "8px" }}
                          value={sy}
                          onChange={handleAcadYear}
                        >
                          <option value="">Select School Year</option>
                          {acad.map((acad) => (
                            <option key={acad.id} value={acad.ay}>
                              {acad.ay}
                            </option>
                          ))}
                        </select>
                        {/* <input
                          type="text"
                          value={sy}
                          onChange={(e) => setSy(e.target.value)}
                        /> */}
                      </label>
                      <div className="student__profile--admission">
                        <img
                          className="student__photo--admission"
                          src={profile}
                        />
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
                          <option value="">SELECT PROGRAM</option>

                          {programsOpen.map((program) => (
                            <option key={program.id} value={program.program}>
                              {program.program}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="semestral">
                        <label>Semester</label>
                        {/* <input type='text' value={semester} disabled/> */}
                        <select
                          id="sem"
                          value={semester}
                          onChange={(e) => setSemester(e.target.value)}
                        >
                          <option value="">Select Semester</option>
                          {sems.map((sem) => (
                            <option key={sem.id} value={sem.sem}>
                              {sem.sem}
                            </option>
                          ))}
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
                        <button
                          className="btn-gen"
                          onClick={generateID}
                          value={studID}
                        >
                          Generate ID
                        </button>
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
                          <label className="student__info--admission">
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder='ex. "Dela Cruz"'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder='ex. "Juan"'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            Middle Name (optional)
                          </label>
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
                          <label>
                            Gender <span className="required">*</span>
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            Date of Birth <span className="required">*</span>
                          </label>
                          <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="four__details">
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            Place of Birth <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder='ex. "Sta. Lucia, Pagadian City"'
                            value={pob}
                            onChange={(e) => setPob(e.target.value)}
                          />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            Nationality <span className="required">*</span>
                          </label>
                          <select
                            onChange={(e) => setNationality(e.target.value)}
                            value={nationality}
                          >
                            {countryData.map((country) => (
                              <option
                                key={shortUUID.generate()}
                                value={country.name.common}
                              >
                                {country.name.common}
                              </option>
                            ))}
                          </select>

                          {/* <input
                            type="text"
                            placeholder='ex. "Filipino"'
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                          /> */}
                        </div>
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            Civil Status <span className="required">*</span>
                          </label>
                          <select
                            onChange={(e) => setCivilStatus(e.target.value)}
                            value={civilStatus}
                          >
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Separated">Separated</option>
                          </select>
                          {/* <input
                            type="text"
                            placeholder='ex. "Single/Married"'
                            value={civilStatus}
                            onChange={(e) => setCivilStatus(e.target.value)}
                          /> */}
                        </div>
                        <div className="student__label--column">
                          <label
                            htmlFor="religion"
                            className="student__info--admission"
                          >
                            Religion (optional)
                          </label>
                          <input
                            list="religions"
                            name="religion"
                            id="religion"
                            value={religion}
                            onChange={(e) => setReligion(e.target.value)}
                          />
                          <datalist id="religions">
                            <option value="Roman Catholic" />
                            <option value="Islam" />
                            <option value="Iglesia ni Cristo" />
                            <option value="Protestant" />
                            <option value="Buddhism" />
                            <option value="Jehovah's Witness" />
                            <option value="Seventh Day Adventist" />
                            <option value="Born Again Christian" />
                            <option value="Aglipayan" />
                            <option value="Baptist" />
                            <option value="Methodist" />
                            <option value="Mormon" />
                            <option value="Pentecostal" />
                            <option value="Judaism" />
                            <option value="Hinduism" />
                            <option value="Atheism" />
                          </datalist>
                          {/* <label
                            for="religion"
                            className="student__info--admission"
                          >
                            Religion
                          </label>

                          <input
                            type="text"
                            placeholder='ex. "Roman Catholic"'
                            value={religion}
                            onChange={(e) => setReligion(e.target.value)}
                            id="religion"
                            list="religion"
                          />

                          <datalist id="religion">
                            
                          </datalist> */}
                        </div>
                      </div>
                      <div className="three__details">
                        <div className="student__label--column">
                          <label className="student__info--admission">
                            Ethnicity/Tribe (optional)
                          </label>
                          <input
                            type="text"
                            placeholder='ex. "Subanen"'
                            value={tribe}
                            onChange={(e) => setTribe(e.target.value)}
                          />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info--admission">
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
                          <label className="student__info--admission">
                            Scholarship
                          </label>
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
                          Current Address (City Address){" "}
                          <span className="required">*</span>
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
                            <span className="required"> *</span>
                          </h3>
                          <p>
                            ( click checkbox if the inform is the same above )
                          </p>
                        </div>

                        <div className={isDisplay(hide)}>
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
                    </div>
                    <div className="parents">
                      <h3 className="details__title">
                        Parents <span className="required">*</span>
                      </h3>
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
                    <input
                      type="submit"
                      value="Admit"
                      className={`btn btn-danger float-end mt-3 ${
                        !semester || !sy || !program ?  "disabled" : ""
                      }`}
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

export default Admission