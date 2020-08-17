import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import "./App.css";
import { Router, Link, useNavigate } from "@reach/router";
import Profile from "./components/Profile";
import Feedback from "./components/Feedback";
import Login from "./components/Login";

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
        <Profile path='users/:userId' />
        <ProfileForm addProfile={addProfile} path='create-profile' />
        <Feed profiles={profiles} path='feed' />
        <AboutPage path='about' />
        <Login path='login' />
      </Router>
    </div>
  );
}

export default App;
