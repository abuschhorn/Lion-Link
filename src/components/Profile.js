import React from "react"

export default function Profile ({profiles}) {
    return (
       <div className = "header"> 
        <h1> Profile </h1> 
        <ul>
            { profiles && profiles.map((profile) => {
                return(
                    <li key={profile.fName}> 
                    First Name: {profile.fName}  Last Name: {profile.lName}  Prounoun: {profile.pronouns} 
                    <hr /> City: {profile.city}     State: {profile.state}  <hr /> Major: {profile.major}
                    Minor: {profile.minor}   Interest: {profile.interest}    
                    Schedule: {profile.schedule}    Religion: {profile.religion}
                    Sexuality: {profile.sexuality} Politics: {profile.politics} 
                    Astrology:{profile.astr} Diet: {profile.diet}  Instagram: {profile.instagram}

                    </li>
                )

            })



            }


        </ul>
       </div>
    )
}
