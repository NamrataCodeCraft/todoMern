import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([])
    const getTask = async () => {
        const response = await axios.get('http://localhost:3000/task', { headers: { authorization: localStorage.getItem("token") } })
        console.log('respones: ', response.data.todo)
        setTodo(response.data.todo)
        console.log('todotodo', todo)
    }
    useEffect(() => {
        getTask()

    }, [])
    const onsubmit = async () => {
        const response = await axios.post('http://localhost:3000/task', { task }, { headers: { authorization: localStorage.getItem("token") } })
        console.log('resonse::: ', response)
        setTask("")
        getTask()



    }

    return (
        <>
            <input type="text" value={task} placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <br />
            <br />
            <button onClick={onsubmit}>submit</button>
            <div>
                <ul>
                    {todo.map((ele) => {
                        return (
                            <li>{ele.task}</li>
                        )
                    })}
                </ul>
            </div>




        </>
    )
}

export default Home