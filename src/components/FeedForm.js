import React, {useState} from 'react'

export default function FeedForm ({addStatus}) {
    const [userName, setUserName] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (event) => {

        event.preventDefault();
        addStatus({userName, createdAt: new Date(), message})
        setUserName('')
        setMessage("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="form-control" value={userName} onChange={(event) => setUserName(event.target.value)} placeholder = "hello"/>
                <input className="form-control" value={message} onChange={(event) => setMessage(event.target.value)} placeholder = "hello"/>
                
                <button className = "btn btn-danger" onClick={handleSubmit}>Update Status</button>
            </form>
        </div>
    )
}
