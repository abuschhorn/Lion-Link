import React from "react"

export default function Profile ({profiles}) {
    return (
       <div className = "header"> 
        <h1> Profile </h1> 
        <ul>
            { profiles && profiles.map((profile) => {
                return(
                    <li key={profile.fName}> 
                    First Name: {profile.fName}

                    </li>
                )

            })



            }


        </ul>
       </div>
    )
}
