import React, {useState} from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import "../Styles.css"
import "../css/admission.css"
function Admission() {
    const [profile, setProfile] = useState();

    const uploadProfile = (e) => {
        console.log(e.target.files)
        setProfile(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div id='menu__container'>
            <SideMenu />
            <div className='pages__container'>
                <div className='pages__wrapper'>
                    <Header title={"Admission"} />
                    <div className='page__container'>
                        <div className='page__row'>
                            <h1 className='admission__title'>Western Mindanao State University</h1>
                            <h2 className='admission__subtitle'>Admission Form</h2>
                            <form>
                                <div className='official'>
                                    <p className='official__title'>Student's Personal Data</p>
                                    <p className='official__subtitle'>To be filled by WMSU addmiting official:</p>
                                    <div className='student__status'>
                                        <p className='colleges'>College of WMSU PAGADIAN</p>
                                        <label className='official__input'>
                                            School Year:
                                            <input type='text' an/>
                                        </label>
                                        <div className='student__profile'>
                                            <img className='student__photo' src={profile}/>
                                            <input type='file' id='profile' hidden onChange={uploadProfile}/>
                                            <label for='profile' className='student__chooser'>Choose Profile</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admission