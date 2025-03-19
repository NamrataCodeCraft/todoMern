import { useState } from "react"
import React from 'react'
import axios from "axios"
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const handleSubmit = async () => {
        console.log(email, password)
        const response = await axios.post('http://localhost:3000/user/', { email, password, username })
        console.log('resonse:: ', response.data)
        setEmail("")
        setPassword("")
        setUsername("")
    }

    return (
        <>
            <input type="text" value={email} placeholder='Enter email' onChange={(e) => setEmail(() => e.target.value)} />
            <br /> <br />
            <input type='text' value={username} placeholder='Enter username' onChange={(e) => setUsername(() => e.target.value)} />
            <br /> <br />
            <input type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(() => e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>submit</button>

        </>
    )
}

export default Signup