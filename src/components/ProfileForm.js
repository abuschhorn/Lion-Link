import React, {useState} from "react";

export default function PublicForm ({addProfile})  {
    const [fName, setFName] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addProfile({fName: fName})
        setFName('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            {/* <p>Required: </p> */}
                <div className="row">
                    <div className="col-sm-6">
                <input required className="form-control" value={fName} onChange={(event) => setFName(event.target.value)} placeholder="First Name"/>
                </div><div className="col-sm-6">
                <input className="form-control" onChange placeholder="Last Name"/>
                </div>
                </div>
                <hr />
                {/* ashley */}
                {/* add pronouns */}
                <input onChange placeholder="City"/>
                <input onChange placeholder="State"/>
                {/* add dropdown */}
                <hr/>
                <input onChange placeholder="Major"/> 
                <input onChange placeholder="Minors"/>
                <hr/>
                {/* troy */}
                <input onChange placeholder="Interests"/>
                <input onChange placeholder="Classes"/>
                <p>Optional:</p>
                <input onChange placeholder="Religion"/>
                <input onChange placeholder="Sexuality"/>
                {/* lauren */}
                <input onChange placeholder="Politics"/>
                <input onChange placeholder="Astrology"/>
                <input onChange placeholder="Diet"/>
                <input onChange placeholder="Social Media"/>


            <button className="btn btn-success" onClick={handleSubmit} > Add Your Profile </button>
            
            </form>
            
            
            
            
        </div>
    )
}

/*

*/