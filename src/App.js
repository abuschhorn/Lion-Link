import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import "./App.css";
import { Router, Link } from "@reach/router";
import TestFeed from "./components/TestFeed";

function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    const newProfiles = [...profiles, profile];
    setProfiles(newProfiles);
  };

  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Dashboard profiles={profiles} path='dashboard' />
        <HomePage path='/' />
        <ProfileForm addProfile={addProfile} path='create-profile' />
        <Feed profiles={profiles} path='feed' />
      </Router>
    </div>
  );
}

export default App;
