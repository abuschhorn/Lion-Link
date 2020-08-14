import React, { useState, useEffect } from "react";
import { useNavigate } from "@reach/router";
import ScheduleForm from "./ScheduleForm";
import Schedule from "./Schedule";
import { firestore } from "../firebase.util";
import { Dropdown, Image } from "react-bootstrap";
import LionRed from "../profileImages/lion-red.png";
import LionOrange from "../profileImages/lion-orange.png";
import LionYellow from "../profileImages/lion-yellow.png";
import LionGreen from "../profileImages/lion-green.png";
import LionTeal from "../profileImages/lion-teal.png";
import LionBlue from "../profileImages/lion-blue.png";
import LionPurple from "../profileImages/lion-purple.png";
import LionPink from "../profileImages/lion-pink.png";

export default function PublicForm({ addProfile }) {
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
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
        name: name,
        pronouns: pronouns,
        avatar: avatar,
        city: city,
        state: state,
        country: country,
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
        setName("");
        setPronouns("");
        setAvatar(null);
        setCity("");
        setState("");
        setCountry("");
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
        <div className='row-12'>
          <label>Full Name:</label>
          <input
            required
            className='form-control'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <label>Pronouns: </label>
            <select
              className='form-control'
              id='select1'
              onChange={(event) => {
                setPronouns(event.target.value);
              }}
            >
              <option>Select</option>
              <option>Prefer Not to Say</option>
              <option>she/her</option>
              <option>he/him</option>
              <option>they/them</option>
              <option>ze/zir</option>
            </select>
          </div>
          <div className='col-sm-6'>
            <label>Profile Avatar:</label>
            <Dropdown>
              <Dropdown.Toggle className='dropdown-toggle' id='dropdown-basic'>
                Select
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-red.png?alt=media&token=e54809fb-3d0e-4ea0-b313-c438cb91740e"
                    )
                  }
                >
                  <Image src={LionRed} roundedCircle height='40' width='40' />{" "}
                  Red{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    console.log("i am Headers");
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-orange.png?alt=media&token=1b24325c-e33a-4b0d-9234-f2c8c5ba13e4"
                    );
                  }}
                >
                  <Image
                    src={LionOrange}
                    roundedCircle
                    height='40'
                    width='40'
                  />{" "}
                  Orange{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-yellow.png?alt=media&token=b22ab6d0-17bd-47d5-8608-4e508aa217d6"
                    )
                  }
                >
                  <Image
                    src={LionYellow}
                    roundedCircle
                    height='40'
                    width='40'
                  />{" "}
                  Yellow{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-green.png?alt=media&token=04ac61de-c5ea-4a76-b3bf-be32968e241a"
                    )
                  }
                >
                  <Image src={LionGreen} roundedCircle height='40' width='40' />{" "}
                  Green{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-teal.png?alt=media&token=b0757597-a491-42ab-bec9-73ec15940e4e"
                    )
                  }
                >
                  <Image src={LionTeal} roundedCircle height='40' width='40' />{" "}
                  Teal{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-blue.png?alt=media&token=5f6bd5f9-d8d8-4593-a70d-98c7e28ac971"
                    )
                  }
                >
                  <Image src={LionBlue} roundedCircle height='40' width='40' />{" "}
                  Blue{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-purple.png?alt=media&token=629702aa-76ec-46e2-bc2d-0ac58063eb8a"
                    )
                  }
                >
                  <Image
                    src={LionPurple}
                    roundedCircle
                    height='40'
                    width='40'
                  />{" "}
                  Purple{" "}
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setAvatar(
                      "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-pink.png?alt=media&token=d1b57211-474d-463f-a3ab-69fe883a614b"
                    )
                  }
                >
                  <Image src={LionPink} roundedCircle height='40' width='40' />{" "}
                  Pink{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-sm-4'>
            <label>City: </label>
            <input
              className='form-control'
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className='col-sm-4'>
            <label>State:</label>
            <input
              className='form-control'
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
            {/* add dropdown */}
          </div>
          <div className='col-sm-4'>
            <label>Country:</label>
            <input
              className='form-control'
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
            {/* add dropdown */}
          </div>
        </div>
        <hr />

        <div className='row'>
          <div className='col-sm-6'>
            <label>Major: </label>
            <select
              className='form-control'
              id='select1'
              onChange={(event) => {
                setMajor(event.target.value);
              }}
            >
              <option>Select</option>
              <option>African American Studies</option>
              <option>Animation</option>
              <option>Applied Mathematics</option>
              <option>Applied Physics</option>
              <option>Art History</option>
              <option>Asian Pacific Studies</option>
              <option>Biochemistry</option>
              <option>Biology</option>
              <option>Business Management</option>
              <option>Chemistry</option>
              <option>Chicana/o and Latina/o Studies</option>
              <option>Civil Engineering</option>
              <option>Classics and Archaeology</option>
              <option>Communication Studies</option>
              <option>Computer Science</option>
              <option>Dance</option>
              <option>Economics</option>
              <option>Electrical Engineering</option>
              <option>English</option>
              <option>Entrepreneurship</option>
              <option>Environmental Science</option>
              <option>Environmental Studies</option>
              <option>Film, Television, and Media Studies</option>
              <option>Film and Television Production</option>
              <option>Finance</option>
              <option>French</option>
              <option>Health and Human Sciences</option>
              <option>History</option>
              <option>Humanities</option>
              <option>Information Systems and Business Analytics</option>
              <option>International Relations</option>
              <option>Journalism</option>
              <option>Liberal Studies</option>
              <option>Marketing</option>
              <option>Mathematics</option>
              <option>Mechanical Engineering</option>
              <option>Modern Languages</option>
              <option>Music</option>
              <option>Philosophy</option>
              <option>Physics</option>
              <option>Political Science</option>
              <option>Psychology</option>
              <option>Recording Arts</option>
              <option>Screenwriting</option>
              <option>Sociology</option>
              <option>Spanish</option>
              <option>Studio Arts</option>
              <option>Theater Arts</option>
              <option>Theology</option>
              <option>Urban Studies</option>
              <option>Women and Gender Studies</option>
            </select>
          </div>

          <div className='col-sm-6'>
            <label>Minor: </label>
            <select
              className='form-control'
              id='select1'
              onChange={(event) => {
                setMinor(event.target.value);
              }}
            >
              <option>Select</option>
              <option>N/A</option>
              <option>Accounting</option>
              <option>African American Studies</option>
              <option>Animation</option>
              <option>Applied Mathematics</option>
              <option>Art History</option>
              <option>Asian Pacific Studies</option>
              <option>Asian Pacific American Studies</option>
              <option>Biochemistry</option>
              <option>Bioethics</option>
              <option>Biology</option>
              <option>Business Administration</option>
              <option>Catholic Studies</option>
              <option>Chemistry</option>
              <option>Chicana/o and Latina/o Studies</option>
              <option>Chinese</option>
              <option>Classics and Archaeology</option>
              <option>Computer Science</option>
              <option>Dance</option>
              <option>Economics</option>
              <option>Education</option>
              <option>Electrical Engineering</option>
              <option>English</option>
              <option>Environmental Science</option>
              <option>Environmental Studies</option>
              <option>Film, Television, and Media Studies</option>
              <option>French</option>
              <option>German</option>
              <option>Global Economics</option>
              <option>Health and Society</option>
              <option>History</option>
              <option>Humanities</option>
              <option>International Documentary Production</option>
              <option>International Relations</option>
              <option>Irish Studies</option>
              <option>Italian</option>
              <option>Jewish Studies</option>
              <option>Journalism</option>
              <option>Modern Greek Studies</option>
              <option>Music</option>
              <option>Peace and Justice Studies</option>
              <option>Philosophy</option>
              <option>Physics</option>
              <option>Political Science</option>
              <option>Public Relations</option>
              <option>Pure Mathematics</option>
              <option>Psychology</option>
              <option>Screenwriting</option>
              <option>Secondary Education Mathematics</option>
              <option>Sociology</option>
              <option>Spanish</option>
              <option>Special Education</option>
              <option>Studio Arts</option>
              <option>Theater Arts</option>
              <option>Theology</option>
              <option>Urban Studies</option>
              <option>Women and Gender Studies</option>
            </select>
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
        <label>Instagram:</label>
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
