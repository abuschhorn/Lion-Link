import React, { useEffect, useState } from "react";
import { firestore } from "../firebase.util";
import { Image } from "react-bootstrap";
import { useNavigate } from "@reach/router";

export default function Profiles({ profiles }) {
  const [userProfiles, setUserProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    firestore
      .collection("users")
      .get()
      .then(function (querySnapshot) {
        let data = [];
        querySnapshot.forEach(function (doc) {
          data.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setUserProfiles(data);
      });
  }, []);

  return (
    <div className='row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row'>
      {userProfiles &&
        userProfiles.map((profile) => {
          return (
            // own profile on left
            <div className='col' key={profile.name}>
              <div
                className='card profiles'
                onClick={() => navigate(`/users/${profile.id}`)}
              >
                <div className='card-body'>
                  <h4 className='card-title'> {profile.name} </h4>
                  <Image src={profile.avatar} height='30' width='30' />
                  <h5 className='card-subtitle mb-2 text-muted'>
                    {" "}
                    {profile.pronouns}{" "}
                  </h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {profile.city}, {profile.state}{" "}
                  </h6>
                  <hr />
                  <div className='card-text profile-text'>
                    <li>Major: {profile.major}</li>
                    <li>Minor: {profile.minor}</li>
                    <li>Interest: {profile.interest}</li>
                    <li>Religion: {profile.religion} </li>
                    <li> Sexuality: {profile.sexuality}</li>
                    <li>Politics: {profile.politics}</li>
                    <li>Astrology: {profile.astr}</li>
                    <li>Diet: {profile.diet}</li>
                    <li>Instagram: {profile.instagram} </li>
                  </div>
                </div>
              </div>
            </div>

            // display other profiles on right
          );
        })}
    </div>
  );
}
