import React, {useState} from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import "../Styles.css"
import "../css/admission.css"
function Admission() {
    const [profile, setProfile] = useState();
    const [hide, setHide] = useState(false);

    const handleHide = (e) => {
      setHide(e.target.checked);
    }

    const uploadProfile = (e) => {
        console.log(e.target.files)
        setProfile(URL.createObjectURL(e.target.files[0]))
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
                <form>
                  <div className="official">
                    <p className="official__title">Student's Personal Data</p>
                    <p className="official__subtitle">
                      To be filled by WMSU addmiting official:
                    </p>
                    <div className="student__status">
                      <p className="colleges">College of WMSU PAGADIAN</p>
                      <label className="official__input">
                        School Year:
                        <input type="text" />
                      </label>
                      <div className="student__profile">
                        <img className="student__photo" src={profile} />
                        <input
                          type="file"
                          id="profile"
                          hidden
                          onChange={uploadProfile}
                        />
                        <label for="profile" className="student__chooser">
                          Choose Profile
                        </label>
                      </div>
                    </div>
                    <div className="student__type">
                      <div class="admission__type">
                        <label>Type of Admission</label>
                        <select id="admission">
                          <option>Regular</option>
                          <option>Irregular</option>
                        </select>
                      </div>
                      <div className="enrollment_status">
                        <label>Enrollment Status</label>
                        <select id="enrollment">
                          <option>Undergraduate</option>
                          <option>Graduate</option>
                        </select>
                      </div>
                      <div className="programs">
                        <label>Program</label>
                        <select id="program">
                          <option>
                            Bachelor of Science in Computer Science
                          </option>
                          <option>Bachelor of Science in Social Work</option>
                          <option>Bachelor of Science in Criminology</option>
                        </select>
                      </div>
                      <div className="semestral">
                        <label>Semester</label>
                        <select id="sem">
                          <option>1st Semester</option>
                          <option>2nd Semester</option>
                        </select>
                      </div>
                    </div>
                    <div className="student__more">
                      <label className="student__label">
                        Student I.D. Number
                        <input className="student__input" />
                      </label>
                      <div className="student__select">
                        <label>Year Level</label>
                        <select id="year__level">
                          <option>1st</option>
                          <option>2nd</option>
                          <option>3rd</option>
                          <option>4th</option>
                        </select>
                      </div>
                    </div>
                    <div className="personal__details">
                      <h3 className="details__title">Personal Details</h3>
                      <div className="fullname">
                        <div className="student__label--column">
                          <label className="student__info">Last Name</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">First Name</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">Middle Name</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                      </div>
                      <div className="two__details">
                        <div className="student__select">
                          <label>Gender</label>
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">Date of Birth</label>
                          <input type="date" />
                        </div>
                      </div>
                      <div className="four__details">
                        <div className="student__label--column">
                          <label className="student__info">
                            Place of Birth
                          </label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">Nationality</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">Civil Status</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">Religion</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                      </div>
                      <div className="three__details">
                        <div className="student__label--column">
                          <label className="student__info">
                            Ethnicity/Tribe
                          </label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">
                            Disability(if any)
                          </label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
                        </div>
                        <div className="student__label--column">
                          <label className="student__info">Scholarship</label>
                          <input type="text" placeholder='ex. "Dela Cruz"' />
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
                          />
                          <label className="bottom__label--center">
                            House or Street No.
                          </label>
                          <input
                            type="text"
                            placeholder="address"
                            className="long__input"
                          />
                          <label className="bottom__label--center">
                            House or Street No.
                          </label>
                          <input
                            type="text"
                            placeholder="address"
                            className="long__input"
                          />
                          <label className="bottom__label--center">
                            House or Street No.
                          </label>
                        </div>
                        <div className="three__details">
                          <div className="student__label--column">
                            <input type="text" placeholder='ex. "Dela Cruz"' />
                            <label className="student__info--center">
                              Ethnicity/Tribe
                            </label>
                          </div>
                          <div className="student__label--column">
                            <input type="text" placeholder='ex. "Dela Cruz"' />
                            <label className="student__info--center">
                              Ethnicity/Tribe
                            </label>
                          </div>
                          <div className="student__label--column">
                            <input type="text" placeholder='ex. "Dela Cruz"' />
                            <label className="student__info--center">
                              Ethnicity/Tribe
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="permanent__address">
                        <div className="with__cb">
                          <input type="checkbox" checked={hide} onChange={handleHide}/>
                          <h3 className="details__title">
                            Permanent Address (City Address)
                          </h3>
                          <p>
                            (
                            <i>
                              click checkbox if the inform is the same above
                            </i>
                            )
                          </p>
                        </div>
                        
                        <div className="three_details--column">
                          <input
                            type="text"
                            placeholder="address"
                            className="long__input"
                          />
                          <label className="bottom__label--center">
                            House or Street No.
                          </label>
                          <input
                            type="text"
                            placeholder="address"
                            className="long__input"
                          />
                          <label className="bottom__label--center">
                            House or Street No.
                          </label>
                          <input
                            type="text"
                            placeholder="address"
                            className="long__input"
                          />
                          <label className="bottom__label--center">
                            House or Street No.
                          </label>
                        </div>
                        <div className="three__details">
                          <div className="student__label--column">
                            <input type="text" placeholder='ex. "Dela Cruz"' />
                            <label className="student__info--center">
                              Ethnicity/Tribe
                            </label>
                          </div>
                          <div className="student__label--column">
                            <input type="text" placeholder='ex. "Dela Cruz"' />
                            <label className="student__info--center">
                              Ethnicity/Tribe
                            </label>
                          </div>
                          <div className="student__label--column">
                            <input type="text" placeholder='ex. "Dela Cruz"' />
                            <label className="student__info--center">
                              Ethnicity/Tribe
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
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">
                            Educational Attainement
                          </label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">Occupation</label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label label--bold">
                            Mother's Name
                          </label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">
                            Education Attainment
                          </label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">Occupation</label>
                          <input type="text" className="parent__input" />
                        </div>
                      </div>
                    </div>
                    <div className="guardian">
                      <h3 className="details__title">Guardian</h3>
                      <div className="guardian__details">
                        <div className="not__two--details--column">
                          <label className="parent__label label--bold">Guardian's Name</label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">Relationship</label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">Address</label>
                          <input type="text" className="parent__input" />
                        </div>
                        <div className="not__two--details--column">
                          <label className="parent__label">Mobile No./Telephone No.</label>
                          <input type="text" className="parent__input" />
                        </div>
                      </div>
                    </div>
                    <input type='submit' value='Admit' className='red__btn--right'/>
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