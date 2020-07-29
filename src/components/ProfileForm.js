import React, { useState, useEffect } from "react";
import { useNavigate } from "@reach/router";
import ScheduleForm from "./ScheduleForm";
import Schedule from "./Schedule";
import { firestore } from "../firebase.util";
// import LionRed from "../profileImages/lion-red";
import { Images } from "../profileImages/Images";

export default function PublicForm({ addProfile }) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [avatar, setAvatar] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState([]);
  const [interest, setInterest] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [religion, setReligion] = useState("");
  const [sexuality, setSexuality] = useState("");
  const [politics, setPolitic] = useState("");
  const [astr, setAstr] = useState("");
  const [diet, setDiet] = useState("");
  const [instagram, setInstagram] = useState("");
  const navigate = useNavigate();

  const addClass = (newClass) => {
    const newClasses = [...schedule, newClass];
    setSchedule(newClasses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    firestore
      .collection("users")
      .add({
        fName: fName,
        lName: lName,
        pronouns: pronouns,
        city: city,
        state: state,
        major: major,
        minor: minor,
        interest: interest,
        schedule: schedule,
        religion: religion,
        sexuality: sexuality,
        politics: politics,
        astr: astr,
        diet: diet,
        instagram: instagram,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        setFName("");
        setLName("");
        setPronouns("");
        setCity("");
        setState("");
        setMajor("");
        setMinor([]);
        setInterest([]);
        setSchedule([]);
        setReligion("");
        setSexuality("");
        setPolitic("");
        setAstr("");
        setDiet("");
        setInstagram("");
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <h2 className='profile-form-header'> Create Profile </h2>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-sm-6'>
            <label>First Name:</label>
            <input
              required
              className='form-control'
              value={fName}
              onChange={(event) => setFName(event.target.value)}
            />
          </div>
          <div className='col-sm-6'>
            <label>Last Name:</label>
            <input
              className='form-control'
              value={lName}
              onChange={(event) => setLName(event.target.value)}
            />
          </div>
        </div>
        {/* add pronouns */}
        {/* <input className="form-control" value={pronouns} onChange={(event) => setPronouns(event.target.value)} placeholder="Pronouns"/> */}
        <label>Pronouns: </label>
        <select
          className='form-control'
          id='select1'
          onChange={(event) => {
            setPronouns(event.target.value);
          }}
        >
          <option>Prefer Not to Say</option>
          <option>she/her</option>
          <option>he/him</option>
          <option>they/them</option>
          <option>ze/zir</option>
        </select>
        <hr />
        <label>Profile Avatar:</label>
        <select
          className='form-control'
          id='selectAv'
          onChange={(event) => {
            setAvatar(event.target.value);
          }}
        >
          <Images />
        </select>
        <div className='row'>
          <div className='col-sm-6'>
            <label>City: </label>
            <input
              className='form-control'
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className='col-sm-6'>
            <label>State:</label>
            <input
              className='form-control'
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
            {/* add dropdown */}
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-sm-6'>
            <label>Major: </label>
            <input
              className='form-control'
              value={major}
              onChange={(event) => setMajor(event.target.value)}
            />
          </div>
          <div className='col-sm-6'>
            <label>Minor:</label>
            <input
              className='form-control'
              value={minor}
              onChange={(event) => setMinor(event.target.value)}
            />
          </div>
        </div>
        <hr />
        <label>Interests:</label>
        <input
          className='form-control'
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        />
        <label>Class Schedule:</label>
        <Schedule classes={schedule} />
        <ScheduleForm addClass={addClass} />
        <h5>Optional:</h5>
        <label>Religion:</label>

        <input
          className='form-control'
          value={religion}
          onChange={(event) => setReligion(event.target.value)}
        />
        <label>Sexuality:</label>
        <input
          className='form-control'
          value={sexuality}
          onChange={(event) => setSexuality(event.target.value)}
        />
        {/* lauren */}
        <label>Political Affiliation:</label>
        <input
          className='form-control'
          value={politics}
          onChange={(event) => setPolitic(event.target.value)}
        />
        <label>Astrological Sign:</label>
        <input
          className='form-control'
          value={astr}
          onChange={(event) => setAstr(event.target.value)}
        />
        <label>Diet:</label>
        <input
          className='form-control'
          value={diet}
          onChange={(event) => setDiet(event.target.value)}
        />
        <label>Social Media(s):</label>
        <input
          className='form-control'
          value={instagram}
          onChange={(event) => setInstagram(event.target.value)}
        />

        <button className='btn btn-danger' onClick={handleSubmit}>
          {" "}
          Add Your Profile{" "}
        </button>
      </form>
    </div>
  );
}

/*

*/
