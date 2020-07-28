import React, {useState} from "react";

export default function PublicForm ({addProfile})  {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [major, setMajor] = useState('')
    const [minor, setMinor] = useState([])
    const [interest, setInterest] = useState([])
    const [schedule, setSchedule] = useState([])
    const [religion, setReligion] = useState('')
    const [sexuality, setSexuality] = useState('')
    const [politics, setPolitic] = useState('')
    const [astr, setAstr] = useState('')
    const [diet, setDiet] = useState('')
    const [instagram, setInstagram] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addProfile({fName: fName, lName: lName, pronouns: pronouns, city: city, state: state, 
            major: major, mino: minor, interest: interest, schedule: schedule, religion: religion, sexuality: sexuality, 
            politics: politics, astr: astr, diet:diet, instagram: instagram})
        setFName('')
        setLName('')
        setPronouns('')
        setCity('')
        setState('')
        setMajor('')
        setMinor([])
        setInterest([])
        setSchedule([])
        setReligion('')
        setSexuality('')
        setPolitic('')
        setAstr('')
        setDiet('')
        setInstagram('')

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            {/* <p>Required: </p> */}
                <div className="row">
                    <div className="col-sm-6">
                <input required className="form-control" value={fName} onChange={(event) => setFName(event.target.value)} placeholder="First Name"/>
                </div><div className="col-sm-6">
                <input className="form-control" value={lName} onChange={(event) => setLName(event.target.value)} placeholder="Last Name"/>
                </div>
                </div>
                {/* add pronouns */}
                <input className="form-control" value={pronouns} onChange={(event) => setPronouns(event.target.value)} placeholder="Pronouns"/>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>she/her</option>
                    <option>he/him</option>
                    <option>they/them</option>
                    <option>ze/zir</option>
                </select>
                <hr />
                <div className="row">
                <div className="col-sm-6">
                <input className="form-control" value={city} onChange={(event) => setCity(event.target.value)} placeholder="City"/>
                </div><div className="col-sm-6">
                <input className="form-control" value={state} onChange={(event) => setState(event.target.value)} placeholder="State"/>
                {/* add dropdown */}
                </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-sm-6">
                <input className="form-control" value={major} onChange={(event) => setMajor(event.target.value)} placeholder="Major"/> 
                </div><div className="col-sm-6">
                <input className="form-control" value={minor} onChange={(event) => setMinor(event.target.value)} placeholder="Minors"/>
                </div>
                </div>
                <hr/>
                <input className="form-control" value={interest} onChange={(event) => setInterest(event.target.value)} placeholder="Interest"/>
                <input className="form-control" value={schedule} onChange={(event) => setSchedule(event.target.value)} placeholder="Schedule"/>
                <p>Optional:</p>
                <input className="form-control" value={religion} onChange={(event) => setReligion(event.target.value)} placeholder="Religion"/>
                <input className="form-control" value={sexuality} onChange={(event) => setSexuality(event.target.value)} placeholder="Sexuality"/>
                {/* lauren */}
                <input className="form-control" value={politics} onChange={(event) => setPolitic(event.target.value)} placeholder="Political Affiliation"/>
                <input className="form-control" value ={astr} onChange={(event) => setAstr(event.target.value)} placeholder="Astrological Sign"/>
                <input className="form-control" value={diet} onChange={(event) => setDiet(event.target.value)} placeholder="Diet"/>
                <input className="form-control" value={instagram} onChange={(event) => setInstagram(event.target.value)} placeholder="Social Media(s)"/>


            <button className="btn btn-success" onClick={handleSubmit} > Add Your Profile </button>
            
            </form>
            
            
            
            
        </div>
    )
}

/*

*/