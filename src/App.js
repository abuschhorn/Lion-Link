import React, { useState, useEffect } from "react";
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
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import { auth } from "./firebase.util";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Dashboard profiles={profiles} path='dashboard' />
        <HomePage path='/' />
        <Profile path='users/:userId' />
        <ProfileForm path='create-profile' />
        <Feed profiles={profiles} path='feed' />
        <AboutPage path='about' />
        <Login path='login' />
        <SignUp path='sign-up' />
        <SignOut path='sign-out' />
      </Router>
    </div>
  );
}

export default App;
