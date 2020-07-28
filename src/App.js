import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { Router, Link } from "@reach/router";

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
      instagram: "@abuschhorn_19",
    },
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
      instagram: "@abuschhorn_19",
    },
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
      instagram: "@abuschhorn_19",
    },
  ]);

  const addProfile = (profile) => {
    const newProfiles = [...profiles, profile];
    setProfiles(newProfiles);
  };

  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Dashboard profiles={profiles} path='dashboard' />
        <ProfileForm addProfile={addProfile} path='/' />
        <Feed profiles={profiles} path='feed' />
      </Router>
    </div>
  );
}

export default App;
