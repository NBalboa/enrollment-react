import React, {useState, useEffect} from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import '../css/enrollment.css'
import axios from 'axios'
import Academic from '../components/Academic'

const Enrollment = () => {
  const [ay, setAy] = useState("");
  const [to, setTo] = useState("");
  const [academics, setAcademics] = useState([]);


  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    setAy(e.target.value);
    if (e.target.value){
      setTo(parseInt(e.target.value) + 1);
    }
    else{
      setTo("");
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    const acad = `${ay}-${to}`;
    const data = { ay: acad };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/enrollment/add_enrollment",
        data
      );
      alert(res.data.data);
      getAcademics();
    } catch (err) {
      console.log(err);
    }
  }

  const getAcademics = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/enrollment/get_enrollment"
      );
      setAcademics(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const updateAcademic = async (id, open) => {

    if(open === 1){
      open = 0;
    }
    else{
      open = 1;
    }

    const data = {id: id, open: open};
    try {
      const res = await axios.put(
        "http://localhost:3000/api/enrollment/update_enrollment",
        data
      );
      getAcademics();
    } catch (err) {
      console.log(err);
    }

  }


  useEffect(() => {
    getAcademics();
  }, [])
    
    



  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <h2>Academic Year Details</h2>
              <form className='academic_form' onSubmit={handleSumbit}>
                  <input type='text' onChange={handleInput} value={ay}/>
                  <span> - </span>
                  <input type='text' value={to} disabled/>
                  <input type='submit' value="Add"/>
              </form>
              <Academic data={academics} update={updateAcademic}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrollment