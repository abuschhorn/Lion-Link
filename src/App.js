import React, {useState} from 'react';
import Profile from "./components/Profile"
import ProfileForm from "./components/ProfileForm"
import Navbar from "./components/Navbar"
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [profiles, setProfiles] = useState([
    {
      fName: "Ashley",
      lName: "Buschhorn",
      pronouns: "she/her",
      city: "Austin",
      state: "TX",
      major: "CS",
      minor: "math",
      interest: ["photography"],
      schedule: ["CMSI 185", "MATH 248"],
      religion: "Christian",
      sexuality: "gay",
      politics: "democrat",
      astr: "cancer",
      diet: null,
      instagram: "@abuschhorn_19"

    }
  ])

  const addProfile = (profile) => {
    const newProfiles = [...profiles, profile];
    setProfiles(newProfiles)
  }
 
  return (
    <div className="container">
      <Navbar/>
     <h1 className="Title"> Lion-Link </h1>
      <div className="row">
      <div className="col-sm-4">
      <Profile profiles={profiles}/>
      </div>
      <div className="col-sm-8">
      <ProfileForm addProfile={addProfile}/>
    </div>
    </div>
    </div>
    
  );
  }

export default App;