import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

import H1 from "../components/H1"
import Input from "../components/Input"
import Error from "../components/Error"

export default () => {
    const navigate = useNavigate()

    const initialInput = { username: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(null)

    const handleChange = e => setInput({...input, [e.target.id]: e.target.value})

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:3000/user/login", input)
            Cookies.set('token', res.data)
            navigate("/profile")
        } catch (err) {
            setErrors(err.response.data);
        }
    }

    return (
        <main id="login" className="form">
            <div className="container">
                <H1>Login</H1>

                <div className="inputs">
                    <Input id="username" title="Username" type="text" onChange={handleChange} value={input.username} />
                    <Input id="password" title="Password" type="password" onChange={handleChange} value={input.password} />
                </div>

                <div className="errors">
                    <Error id="username" errors={errors} />
                    <Error id="password" errors={errors} />
                </div>
                
                <button onClick={handleSubmit}>Login</button>
            </div>
        </main>
    )
}