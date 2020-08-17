import React, { useState, useEffect } from "react";
import { useNavigate } from "@reach/router";
import ScheduleForm from "./ScheduleForm";
import Schedule from "./Schedule";
import {
  firestore,
  signInWithGoogle,
  auth,
  signInWithEmailAndPassword,
} from "../firebase.util";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        email: email,
        password: password,
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
        setEmail("");
        setPassword("");
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
      <div>
        <h2 className='profile-form-header'> Create Profile </h2>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-sm-6'>
              <label>Email: </label>
              <input
                className='form-control'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className='col-sm-6'>
              <label>Password: </label>
              <input
                className='form-control'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

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
                <option></option>
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
                <Dropdown.Toggle
                  className='dropdown-toggle'
                  id='dropdown-basic'
                >
                  Please Select
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
                    <Image
                      src={LionGreen}
                      roundedCircle
                      height='40'
                      width='40'
                    />{" "}
                    Green{" "}
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() =>
                      setAvatar(
                        "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-teal.png?alt=media&token=b0757597-a491-42ab-bec9-73ec15940e4e"
                      )
                    }
                  >
                    <Image
                      src={LionTeal}
                      roundedCircle
                      height='40'
                      width='40'
                    />{" "}
                    Teal{" "}
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() =>
                      setAvatar(
                        "https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-blue.png?alt=media&token=5f6bd5f9-d8d8-4593-a70d-98c7e28ac971"
                      )
                    }
                  >
                    <Image
                      src={LionBlue}
                      roundedCircle
                      height='40'
                      width='40'
                    />{" "}
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
                    <Image
                      src={LionPink}
                      roundedCircle
                      height='40'
                      width='40'
                    />{" "}
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
              <select
                className='form-control'
                value={state}
                onChange={(event) => setState(event.target.value)}
              >
                <option></option>
                <option value='AL'>AL</option>
                <option value='AK'>AK</option>
                <option value='AR'>AR</option>
                <option value='AZ'>AZ</option>
                <option value='CA'>CA</option>
                <option value='CO'>CO</option>
                <option value='CT'>CT</option>
                <option value='DC'>DC</option>
                <option value='DE'>DE</option>
                <option value='FL'>FL</option>
                <option value='GA'>GA</option>
                <option value='HI'>HI</option>
                <option value='IA'>IA</option>
                <option value='ID'>ID</option>
                <option value='IL'>IL</option>
                <option value='IN'>IN</option>
                <option value='KS'>KS</option>
                <option value='KY'>KY</option>
                <option value='LA'>LA</option>
                <option value='MA'>MA</option>
                <option value='MD'>MD</option>
                <option value='ME'>ME</option>
                <option value='MI'>MI</option>
                <option value='MN'>MN</option>
                <option value='MO'>MO</option>
                <option value='MS'>MS</option>
                <option value='MT'>MT</option>
                <option value='NC'>NC</option>
                <option value='NE'>NE</option>
                <option value='NH'>NH</option>
                <option value='NJ'>NJ</option>
                <option value='NM'>NM</option>
                <option value='NV'>NV</option>
                <option value='NY'>NY</option>
                <option value='ND'>ND</option>
                <option value='OH'>OH</option>
                <option value='OK'>OK</option>
                <option value='OR'>OR</option>
                <option value='PA'>PA</option>
                <option value='RI'>RI</option>
                <option value='SC'>SC</option>
                <option value='SD'>SD</option>
                <option value='TN'>TN</option>
                <option value='TX'>TX</option>
                <option value='UT'>UT</option>
                <option value='VT'>VT</option>
                <option value='VA'>VA</option>
                <option value='WA'>WA</option>
                <option value='WI'>WI</option>
                <option value='WV'>WV</option>
                <option value='WY'>WY</option>
              </select>
              {/* add dropdown */}
            </div>
            <div className='col-sm-4'>
              <label>Country:</label>
              <select
                className='form-control'
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option></option>
                <option value='United States'>United States</option>
                <option value='Afganistan'>Afghanistan</option>
                <option value='Albania'>Albania</option>
                <option value='Algeria'>Algeria</option>
                <option value='American Samoa'>American Samoa</option>
                <option value='Andorra'>Andorra</option>
                <option value='Angola'>Angola</option>
                <option value='Anguilla'>Anguilla</option>
                <option value='Antigua & Barbuda'>Antigua & Barbuda</option>
                <option value='Argentina'>Argentina</option>
                <option value='Armenia'>Armenia</option>
                <option value='Aruba'>Aruba</option>
                <option value='Australia'>Australia</option>
                <option value='Austria'>Austria</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Bahamas'>Bahamas</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Barbados'>Barbados</option>
                <option value='Belarus'>Belarus</option>
                <option value='Belgium'>Belgium</option>
                <option value='Belize'>Belize</option>
                <option value='Benin'>Benin</option>
                <option value='Bermuda'>Bermuda</option>
                <option value='Bhutan'>Bhutan</option>
                <option value='Bolivia'>Bolivia</option>
                <option value='Bonaire'>Bonaire</option>
                <option value='Bosnia & Herzegovina'>
                  Bosnia & Herzegovina
                </option>
                <option value='Botswana'>Botswana</option>
                <option value='Brazil'>Brazil</option>
                <option value='British Indian Ocean Ter'>
                  British Indian Ocean Ter
                </option>
                <option value='Brunei'>Brunei</option>
                <option value='Bulgaria'>Bulgaria</option>
                <option value='Burkina Faso'>Burkina Faso</option>
                <option value='Burundi'>Burundi</option>
                <option value='Cambodia'>Cambodia</option>
                <option value='Cameroon'>Cameroon</option>
                <option value='Canada'>Canada</option>
                <option value='Canary Islands'>Canary Islands</option>
                <option value='Cape Verde'>Cape Verde</option>
                <option value='Cayman Islands'>Cayman Islands</option>
                <option value='Central African Republic'>
                  Central African Republic
                </option>
                <option value='Chad'>Chad</option>
                <option value='Channel Islands'>Channel Islands</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Christmas Island'>Christmas Island</option>
                <option value='Cocos Island'>Cocos Island</option>
                <option value='Colombia'>Colombia</option>
                <option value='Comoros'>Comoros</option>
                <option value='Congo'>Congo</option>
                <option value='Cook Islands'>Cook Islands</option>
                <option value='Costa Rica'>Costa Rica</option>
                <option value='Cote DIvoire'>Cote DIvoire</option>
                <option value='Croatia'>Croatia</option>
                <option value='Cuba'>Cuba</option>
                <option value='Curaco'>Curacao</option>
                <option value='Cyprus'>Cyprus</option>
                <option value='Czech Republic'>Czech Republic</option>
                <option value='Denmark'>Denmark</option>
                <option value='Djibouti'>Djibouti</option>
                <option value='Dominica'>Dominica</option>
                <option value='Dominican Republic'>Dominican Republic</option>
                <option value='East Timor'>East Timor</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='Egypt'>Egypt</option>
                <option value='El Salvador'>El Salvador</option>
                <option value='Equatorial Guinea'>Equatorial Guinea</option>
                <option value='Eritrea'>Eritrea</option>
                <option value='Estonia'>Estonia</option>
                <option value='Ethiopia'>Ethiopia</option>
                <option value='Falkland Islands'>Falkland Islands</option>
                <option value='Faroe Islands'>Faroe Islands</option>
                <option value='Fiji'>Fiji</option>
                <option value='Finland'>Finland</option>
                <option value='France'>France</option>
                <option value='French Guiana'>French Guiana</option>
                <option value='French Polynesia'>French Polynesia</option>
                <option value='French Southern Ter'>French Southern Ter</option>
                <option value='Gabon'>Gabon</option>
                <option value='Gambia'>Gambia</option>
                <option value='Georgia'>Georgia</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Gibraltar'>Gibraltar</option>
                <option value='Great Britain'>Great Britain</option>
                <option value='Greece'>Greece</option>
                <option value='Greenland'>Greenland</option>
                <option value='Grenada'>Grenada</option>
                <option value='Guadeloupe'>Guadeloupe</option>
                <option value='Guam'>Guam</option>
                <option value='Guatemala'>Guatemala</option>
                <option value='Guinea'>Guinea</option>
                <option value='Guyana'>Guyana</option>
                <option value='Haiti'>Haiti</option>
                <option value='Hawaii'>Hawaii</option>
                <option value='Honduras'>Honduras</option>
                <option value='Hong Kong'>Hong Kong</option>
                <option value='Hungary'>Hungary</option>
                <option value='Iceland'>Iceland</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='India'>India</option>
                <option value='Iran'>Iran</option>
                <option value='Iraq'>Iraq</option>
                <option value='Ireland'>Ireland</option>
                <option value='Isle of Man'>Isle of Man</option>
                <option value='Israel'>Israel</option>
                <option value='Italy'>Italy</option>
                <option value='Jamaica'>Jamaica</option>
                <option value='Japan'>Japan</option>
                <option value='Jordan'>Jordan</option>
                <option value='Kazakhstan'>Kazakhstan</option>
                <option value='Kenya'>Kenya</option>
                <option value='Kiribati'>Kiribati</option>
                <option value='Korea North'>Korea North</option>
                <option value='Korea Sout'>Korea South</option>
                <option value='Kuwait'>Kuwait</option>
                <option value='Kyrgyzstan'>Kyrgyzstan</option>
                <option value='Laos'>Laos</option>
                <option value='Latvia'>Latvia</option>
                <option value='Lebanon'>Lebanon</option>
                <option value='Lesotho'>Lesotho</option>
                <option value='Liberia'>Liberia</option>
                <option value='Libya'>Libya</option>
                <option value='Liechtenstein'>Liechtenstein</option>
                <option value='Lithuania'>Lithuania</option>
                <option value='Luxembourg'>Luxembourg</option>
                <option value='Macau'>Macau</option>
                <option value='Macedonia'>Macedonia</option>
                <option value='Madagascar'>Madagascar</option>
                <option value='Malaysia'>Malaysia</option>
                <option value='Malawi'>Malawi</option>
                <option value='Maldives'>Maldives</option>
                <option value='Mali'>Mali</option>
                <option value='Malta'>Malta</option>
                <option value='Marshall Islands'>Marshall Islands</option>
                <option value='Martinique'>Martinique</option>
                <option value='Mauritania'>Mauritania</option>
                <option value='Mauritius'>Mauritius</option>
                <option value='Mayotte'>Mayotte</option>
                <option value='Mexico'>Mexico</option>
                <option value='Midway Islands'>Midway Islands</option>
                <option value='Moldova'>Moldova</option>
                <option value='Monaco'>Monaco</option>
                <option value='Mongolia'>Mongolia</option>
                <option value='Montserrat'>Montserrat</option>
                <option value='Morocco'>Morocco</option>
                <option value='Mozambique'>Mozambique</option>
                <option value='Myanmar'>Myanmar</option>
                <option value='Nambia'>Nambia</option>
                <option value='Nauru'>Nauru</option>
                <option value='Nepal'>Nepal</option>
                <option value='Netherland Antilles'>Netherland Antilles</option>
                <option value='Netherlands'>
                  Netherlands (Holland, Europe)
                </option>
                <option value='Nevis'>Nevis</option>
                <option value='New Caledonia'>New Caledonia</option>
                <option value='New Zealand'>New Zealand</option>
                <option value='Nicaragua'>Nicaragua</option>
                <option value='Niger'>Niger</option>
                <option value='Nigeria'>Nigeria</option>
                <option value='Niue'>Niue</option>
                <option value='Norfolk Island'>Norfolk Island</option>
                <option value='Norway'>Norway</option>
                <option value='Oman'>Oman</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='Palau Island'>Palau Island</option>
                <option value='Palestine'>Palestine</option>
                <option value='Panama'>Panama</option>
                <option value='Papua New Guinea'>Papua New Guinea</option>
                <option value='Paraguay'>Paraguay</option>
                <option value='Peru'>Peru</option>
                <option value='Phillipines'>Philippines</option>
                <option value='Pitcairn Island'>Pitcairn Island</option>
                <option value='Poland'>Poland</option>
                <option value='Portugal'>Portugal</option>
                <option value='Puerto Rico'>Puerto Rico</option>
                <option value='Qatar'>Qatar</option>
                <option value='Republic of Montenegro'>
                  Republic of Montenegro
                </option>
                <option value='Republic of Serbia'>Republic of Serbia</option>
                <option value='Reunion'>Reunion</option>
                <option value='Romania'>Romania</option>
                <option value='Russia'>Russia</option>
                <option value='Rwanda'>Rwanda</option>
                <option value='St Barthelemy'>St Barthelemy</option>
                <option value='St Eustatius'>St Eustatius</option>
                <option value='St Helena'>St Helena</option>
                <option value='St Kitts-Nevis'>St Kitts-Nevis</option>
                <option value='St Lucia'>St Lucia</option>
                <option value='St Maarten'>St Maarten</option>
                <option value='St Pierre & Miquelon'>
                  St Pierre & Miquelon
                </option>
                <option value='St Vincent & Grenadines'>
                  St Vincent & Grenadines
                </option>
                <option value='Saipan'>Saipan</option>
                <option value='Samoa'>Samoa</option>
                <option value='Samoa American'>Samoa American</option>
                <option value='San Marino'>San Marino</option>
                <option value='Sao Tome & Principe'>Sao Tome & Principe</option>
                <option value='Saudi Arabia'>Saudi Arabia</option>
                <option value='Senegal'>Senegal</option>
                <option value='Seychelles'>Seychelles</option>
                <option value='Sierra Leone'>Sierra Leone</option>
                <option value='Singapore'>Singapore</option>
                <option value='Slovakia'>Slovakia</option>
                <option value='Slovenia'>Slovenia</option>
                <option value='Solomon Islands'>Solomon Islands</option>
                <option value='Somalia'>Somalia</option>
                <option value='South Africa'>South Africa</option>
                <option value='Spain'>Spain</option>
                <option value='Sri Lanka'>Sri Lanka</option>
                <option value='Sudan'>Sudan</option>
                <option value='Suriname'>Suriname</option>
                <option value='Swaziland'>Swaziland</option>
                <option value='Sweden'>Sweden</option>
                <option value='Switzerland'>Switzerland</option>
                <option value='Syria'>Syria</option>
                <option value='Tahiti'>Tahiti</option>
                <option value='Taiwan'>Taiwan</option>
                <option value='Tajikistan'>Tajikistan</option>
                <option value='Tanzania'>Tanzania</option>
                <option value='Thailand'>Thailand</option>
                <option value='Togo'>Togo</option>
                <option value='Tokelau'>Tokelau</option>
                <option value='Tonga'>Tonga</option>
                <option value='Trinidad & Tobago'>Trinidad & Tobago</option>
                <option value='Tunisia'>Tunisia</option>
                <option value='Turkey'>Turkey</option>
                <option value='Turkmenistan'>Turkmenistan</option>
                <option value='Turks & Caicos Is'>Turks & Caicos Is</option>
                <option value='Tuvalu'>Tuvalu</option>
                <option value='Uganda'>Uganda</option>
                <option value='United Kingdom'>United Kingdom</option>
                <option value='Ukraine'>Ukraine</option>
                <option value='United Arab Erimates'>
                  United Arab Emirates
                </option>
                <option value='Uraguay'>Uruguay</option>
                <option value='Uzbekistan'>Uzbekistan</option>
                <option value='Vanuatu'>Vanuatu</option>
                <option value='Vatican City State'>Vatican City State</option>
                <option value='Venezuela'>Venezuela</option>
                <option value='Vietnam'>Vietnam</option>
                <option value='Virgin Islands (Brit)'>
                  Virgin Islands (Brit)
                </option>
                <option value='Virgin Islands (USA)'>
                  Virgin Islands (USA)
                </option>
                <option value='Wake Island'>Wake Island</option>
                <option value='Wallis & Futana Is'>Wallis & Futana Is</option>
                <option value='Yemen'>Yemen</option>
                <option value='Zaire'>Zaire</option>
                <option value='Zambia'>Zambia</option>
                <option value='Zimbabwe'>Zimbabwe</option>
              </select>
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
                <option></option>
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
                <option></option>
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
            Create Profile{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
