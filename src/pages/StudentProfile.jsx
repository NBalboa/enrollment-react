import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProfilePic from "../assets/react.svg"
import "../Styles.css";
import "../css/student_profile.css";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentProfile() {

      const [profile, setProfile] = useState(null);
      const [sy, setSy] = useState("");
      const [admissionType, setAdmissionType] = useState("");
      const [enrollmentStatus, setEnrollmentStatus] = useState("");
      const [program, setProgram] = useState("");
      const [semester, setSemester] = useState("");
      const [studID, setStudID] = useState("");
      const [yearLevel, setYearLevel] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [middleName, setMiddleName] = useState("");
      const [gender, setGender] = useState("");
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
  
  const {id} = useParams();

  const handleData = async function() {
    const { data } = await axios.get(
      `http://localhost:3000/api/admission/student/${id}`
    );

    const student = data[0];
    setProfile(student.profile);
    setFirstName(student.first_name);
    setLastName(student.last_name);
    setMiddleName(student.middle_name);
    console.log(data[0]);
  }

  useEffect(() => {
    handleData();
  }, []);
  

  return (
    <div className="student__profile--container">
      <div className="container">
        <div className="main-body">
          <nav aria-label="breadcrumb" className="main-breadcrumb mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to={"/"}
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page"
              >
                Student Profile
              </li>
            </ol>
          </nav>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column algin-items-center text-center">
                    <div className="student_image-wrapper">
                      {profile ? (
                        <img 
                          width={150}
                          alt="Students"
                          className="student-image"
                          src={`http://localhost:3000/${profile}`}></img>
                      ) : (
                        <img
                          src={ProfilePic}
                          alt="Students"
                          className="student-image"
                          width={150}
                        ></img>
                      )}
                    </div>

                    <div className="mt-3">
                      <h4>{`${lastName}, ${firstName} ${middleName}`}</h4>
                      <p className="text-secondary mb-1">Bachelor of Studies</p>
                      <p className="text-muted font-size-sm">
                        Taga Pagadian Ko
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-md-8">
              <div className="card md-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Botchok</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Middle Name:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Gender:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Male</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Date of Birth:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">dd/mm/yy</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Place of Birth:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Pagadian city</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Nationality:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Canadian</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Civil Status:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Single sa tulo
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Religion:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Christian</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Ethnicity/Tribe:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Filipino</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Disability(if any):</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">ex. "Blind"</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Scholorship:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Wala uy tsk</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mt-3">
                <div className="card h-100">
                  <div className="card">
                    <div className="card-body">
                      <h2>Current Address (City Address)</h2>
                      <hr></hr>
                      <div className="d-flex flex-column algin-items-center text-center">
                        <div className="mt-3">
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">House or Street No.</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Pagadian City
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Barangay, Town, City</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Wala ko kabalo
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Zip Code:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">7023</div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Province, Country:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Wala sad ko kabalo
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Mobile Phone No.:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              ex "09123456789"
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Telephone No.:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              #8888-888
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <h2>Permanent Address (City Address)</h2>
                        <hr></hr>
                      </div>
                      <div className="d-flex flex-column algin-items-center text-center">
                        <div className="mt-3">
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">House or Street No.</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Pagadian City
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Barangay, Town, City</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Wala ko kabalo
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Zip Code:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">7023</div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Province, Country:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Wala sad ko kabalo
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Mobile Phone No.:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              ex "09123456789"
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Telephone No.:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              #8888-888
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h2>Parents/Guardian</h2>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Father's Name:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Botchokoy C. Kingkoy Sr.
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Educational Attainment:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">High School</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Occupation:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Multi Role job
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mother's Name:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Chichay C. Kingkoy Sr.
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Educational Attainment:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">High School</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Occupation:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Multi Role job
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h4 className="mb-0">Guardian</h4>
                        <h6 className="mb-0">Guardian's Name:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Chichay C. Kingkoy Sr.
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Relationship:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">aunt</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Next to my neigbors house
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile No.:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        ex "09123456789"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
