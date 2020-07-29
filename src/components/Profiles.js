import React, { useEffect } from "react";
import { firestore } from "../firebase.util";

export default function Profiles({ profiles }) {
  useEffect(() => {
    firestore
      .collection("users")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
  }, []);

  return (
    <div className='row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row'>
      {profiles &&
        profiles.map((profile) => {
          return (
            // own profile on left
            <div className='col'>
              <div className='card' key={profile.fName}>
                <div className='card-body'>
                  <h4 className='card-title'>
                    {" "}
                    {profile.fName} {profile.lName}{" "}
                  </h4>
                  <h5 className='card-subtitle mb-2 text-muted'>
                    {" "}
                    {profile.pronouns}{" "}
                  </h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {profile.city}, {profile.state}{" "}
                  </h6>
                  <hr />
                  Major: {profile.major}
                  Minor: {profile.minor} Interest: {profile.interest}
                  Schedule: {profile.schedule} Religion: {profile.religion}
                  Sexuality: {profile.sexuality} Politics: {profile.politics}
                  Astrology:{profile.astr} Diet: {profile.diet} Instagram:{" "}
                  {profile.instagram}
                </div>
              </div>
            </div>

            // display other profiles on right
          );
        })}
    </div>
  );
}
