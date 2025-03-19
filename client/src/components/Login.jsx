import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const handleSubmit = async () => {
        console.log(email, password)
        const response = await axios.post('http://localhost:3000/user/login', { email, password })
        console.log('resonse:: ', response.data.token)
        localStorage.setItem("token", response.data.token)
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <input type="text" value={email} placeholder='Enter email' onChange={(e) => setEmail(() => e.target.value)} />
            <br /> <br />
            <input type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(() => e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Login