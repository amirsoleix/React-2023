// import { forEach } from "lodash";
// import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

import './RegisterForm.scss';

const Form = ({online}) => {
  const elementIds = {
    name: "entry.720494294",  // name 1
    gender: "entry.2125451900", // gender 2125451900
    birth: "entry.577684671",  // birth
    phone: "entry.1196606997", // phone
    email: "entry.1846349181", //email 5
    nationalId: "entry.1750121672", // national ID or student ID
    uni: "entry.142384631",  // university
    telId: "entry.67847481",   // telegram ID
    degree: "entry.959275089",  // degree of education
    FOE: "entry.170935389",  // field of education 10
    FOI: "entry.1362772143", // field of interest
    lunch: "entry.1201361250", // lunch
  };
  // const [inperson_lunch_state, setLunch]  = useState('None');
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.720494294": "",  // 1
    "entry.2125451900": "",
    "entry.577684671": "",
    "entry.1196606997": "",
    "entry.1846349181": "", // 5
    "entry.1750121672": "",
    "entry.142384631": "",
    "entry.67847481": "",
    "entry.959275089": "",
    "entry.170935389": "",  // 10
    "entry.1362772143": "",
    "entry.1201361250": "", // 12
  });

  // let inperson_lunch_state = 'None';
  // let gender = 'Male';

  function genderOnChange(gen) {
    setFormData((prevState) => ({
      ...prevState,
      [elementIds.gender]: gen
    }));
  }
  
  function lunchOnChange(state) {
    // if (state === 'None') {
    //   setLunch('None');
    // } else if (state === 'Day1') {
    //   setLunch('Day 1');
    // } else if (state === 'Day2') {
    //   setLunch('Day 2');
    // } else {
    //   setLunch('Both');
    // }
    // inperson_lunch_state = state;
    setFormData((prevState) => ({
      ...prevState,
      [elementIds.lunch]: state
    }));
    console.log(state);
    // console.log(inperson_lunch_state);
  }

  // let radios = document.querySelectorAll('input[type=radio][name="gender"]');
  // for (let i = 0; i < radios.length; i++) {
  //   radios[i].addEventListener('change', () => {
  //     genderOnChange(radios[i].value);
  //     // console.log(elementIds.gender)
  //   })
  // }
  
  // let radio1 = document.getElementById('genderMaleRadio');
  // radio1.addEventListener('change', () => {
  //   let genderInput = document.getElementById('genderInput');
  //   genderInput.value = 'Male';
  // })

  // function changeGender() {
  //   console.log(gender);
  // }

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  function go2payment() {
    // console.log(inperson_lunch_state);
    let local_var = 'None';
    let radios = document.querySelectorAll('input[type=radio][name="lunch"]');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log(radios[i].value);
        local_var = radios[i].value;
      }
    }
    // if (submit) {
      let link = '';
      if (online) {
        link = 'https://zarinp.al/477251';
      } else if (local_var === 'None') {
        link = 'https://zarinp.al/477250';
      } else if (local_var === 'Day 1') {
        link = 'https://zarinp.al/477248';
      } else if (local_var === 'Day 2') {
        link = 'https://zarinp.al/477249';
      } else {
        link = 'https://zarinp.al/477247';
      }
      window.open(link, '_self');
    // }
    console.log(local_var);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmit(true);

    let url = `https://docs.google.com/forms/d/e/1FAIpQLSdijMVTyvE8BXtdVhOpOvOZS63NdccO3FSdqzMWgAlpUxBVHQ/formResponse?entry.720494294=${formData["entry.720494294"]}&entry.2125451900=${formData[elementIds.gender]}&entry.577684671=${formData[elementIds.birth]}&entry.1196606997=${formData["entry.1196606997"]}&entry.1846349181=${formData["entry.1846349181"]}&entry.1750121672=${formData["entry.1750121672"]}&entry.142384631=${formData["entry.142384631"]}&entry.67847481=${formData["entry.67847481"]}&entry.959275089=${formData["entry.959275089"]}&entry.170935389=${formData["entry.170935389"]}&entry.1362772143=${formData["entry.1362772143"]}&entry.1201361250=${formData["entry.1201361250"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }

  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm"> Thanks for your registering!... </div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">

            <fieldset className="field">
              <label htmlFor={elementIds.name}> Name*: </label>
              <input
                required
                type="text"
                name={elementIds.name}
                onChange={handleInputData(elementIds.name)}
                value={formData[elementIds.name]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
            <label htmlFor={elementIds.gender}>Gender*:</label>
              <input
                  id="genderInput"
                  required
                  type="text"
                  name={elementIds.gender}
                  onChange={handleInputData(elementIds.gender)}
                  value={formData[elementIds.gender]}
                  autoComplete={false}
                  // disabled
                  style={{display: 'none'}}
              />
              <div className="div-flex-row" style={{gap: '10px'}}>
                <div className="div-flex-row align-items-center">
                  <div className="div-radio-button" onClick={() => genderOnChange('Male')}>
                    <input id='genderMaleRadio' className='radio-input' type="radio" name="gender" value="Male"/>
                  </div>
                  <p className='text-align-center'> Male </p>
                </div>
                <div className="div-flex-row align-items-center">
                  <div className="div-radio-button" onClick={() => genderOnChange('Female')}>
                    <input id='genderFemaleRadio' className='radio-input' type="radio" name="gender" value="Female"/>
                  </div>
                  <p className='text-align-center'> Female </p>
                </div>
              </div>
              {/* <div className="div-flex-row">
                <label className='div-flex-row'>
                  <input id='genderMaleRadio' className='radio-input' type="radio" name="gender" value="Male"/>
                  <p className='text-align-center'> Male </p>
                </label>
                <label className='div-flex-row'>
                  <input id='genderFemaleRadio' className='radio-input' type="radio" name="gender" value="Female"/>
                  <p className='text-align-center'> Female </p>
                </label>
              </div> */}
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.birth}>Birth*:</label>
              <input
                required
                type="text"
                name={elementIds.birth}
                onChange={handleInputData(elementIds.birth)}
                value={formData[elementIds.birth]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.phone}>Phone Number*:</label>
              <input
                required
                type="text"
                name={elementIds.phone}
                onChange={handleInputData(elementIds.phone)}
                value={formData[elementIds.phone]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.email}>E-mail*:</label>
              <input
                required
                type="email"
                name={elementIds.email}
                onChange={handleInputData(elementIds.email)}
                value={formData[elementIds.email]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.nationalId}>National ID*:</label>
              <p style={{margin: 0, color: 'red'}}> If you are student at Sharif University, Enter your student ID. </p>
              <input
                required
                type="text"
                name={elementIds.nationalId}
                onChange={handleInputData(elementIds.nationalId)}
                value={formData[elementIds.nationalId]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.uni}>Institute/Company*:</label>
              <input
                required
                type="text"
                name={elementIds.uni}
                onChange={handleInputData(elementIds.uni)}
                value={formData[elementIds.uni]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.telId}>Telegram ID:</label>
              <input
                // required
                type="text"
                name={elementIds.telId}
                onChange={handleInputData(elementIds.telId)}
                value={formData[elementIds.telId]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.degree}>Acadamic Status:</label>
              <input
                // required
                type="text"
                name={elementIds.degree}
                onChange={handleInputData(elementIds.degree)}
                value={formData[elementIds.degree]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.FOE}>Acadamic Field:</label>
              <input
                // required
                type="text"
                name={elementIds.FOE}
                onChange={handleInputData(elementIds.FOE)}
                value={formData[elementIds.FOE]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor={elementIds.FOI}>Fields of interest:</label>
              <input
                // required
                type="text"
                name={elementIds.FOI}
                onChange={handleInputData(elementIds.FOI)}
                value={formData[elementIds.FOI]}
                autoComplete={false}
              />
            </fieldset>

            
            <fieldset className="field"  style={online ? {display: 'none'}: {display: 'flex'}}>
              <label htmlFor={elementIds.lunch}>Do You Want Lunch?*:</label>
              <input
                id='lunchInputId'
                // required
                type="text"
                name={elementIds.lunch}
                onChange={handleInputData(elementIds.lunch)}
                value={formData[elementIds.lunch]}
                autoComplete={false}
                style={{display: 'none'}}
              />
              {/* <p style={{margin: 0, color: 'red'}}> Only if you participate in the event in-person. </p> */}
              <div className="div-flex-row" style={{gap: '10px'}}>
                <div className="div-flex-row align-items-center">
                  <div className="div-radio-button-1" onClick={() => lunchOnChange('None')}>
                    <input className='radio-input' type="radio" name="lunch" value="None"/>
                  </div>
                  <p className='text-align-center'> None </p>
                </div>
                <div className="div-flex-row align-items-center">
                  <div className="div-radio-button-2" onClick={() => lunchOnChange('Day 1')}>
                    <input className='radio-input' type="radio" name="lunch" value="Day 1"/>
                  </div>
                  <p className='text-align-center'> First Day </p>
                </div>
              </div>
              <div className="div-flex-row align-items-center" style={{gap: '10px'}}>
                <div className="div-flex-row">
                  <div className="div-radio-button-3" onClick={() => lunchOnChange('Day 2')}>
                    <input className='radio-input' type="radio" name="lunch" value="Day 2"/>
                  </div>
                  <p className='text-align-center'> Second Day </p>
                </div>
                <div className="div-flex-row align-items-center">
                  <div className="div-radio-button-4" onClick={() => lunchOnChange('Both')}>
                    <input className='radio-input' type="radio" name="lunch" value="Both"/>
                  </div>
                  <p className='text-align-center'> Both </p>
                </div>
              </div>
            </fieldset>

            <button className="submit-button" type="submit" onClick={go2payment}> Submit </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
