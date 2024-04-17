import { createBrowserRouter } from 'react-router-dom'

import Register from "./Register"
import Login from "./Login"

export default createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
])