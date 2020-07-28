import React, {useState} from 'react'

export default function FeedForm ({addStatus}) {
    const [userName, setUserName] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault();
        addStatus({userName, message})
        setMessage("")
    }
    return (
        <div>
            <form>
                <input placeholder = "hello"/>
                
            </form>
        </div>
    )
}
