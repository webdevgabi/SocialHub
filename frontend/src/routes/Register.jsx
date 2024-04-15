import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import Input from "../components/Input"
import H1 from "../components/H1"
import Error from "../components/Error"

export default () => {
    const navigate = useNavigate()

    const initialInput = { username: '', displayName: '', email: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(null)

    const handleChange = e => setInput({...input, [e.target.id]: e.target.value})

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:3000/user/register", input)
            navigate("/login")
        } catch (err) {
            setErrors(err.response.data);
        }
    }

    return(
        <div id="register">
            <div className="container">
                <H1>Registration</H1>        

                <div className="inputs">
                    <Input id="username" title="Username" type="text" onChange={handleChange} value={input.username} />
                    <Input id="displayName" title="Display name" type="text" onChange={handleChange} value={input.displayName} />
                    <Input id="email" title="Email" type="email" onChange={handleChange} value={input.email} />
                    <Input id="password" title="Password" type="password" onChange={handleChange} value={input.password} />
                </div>

                <div className="errors">
                    <Error id="username" errors={errors} />
                    <Error id="displayName" errors={errors} />
                    <Error id="email" errors={errors} />
                    <Error id="password" errors={errors} />
                </div>
                
                <button onClick={handleSubmit}>Registration</button>
            </div>
        </div>
    )
}