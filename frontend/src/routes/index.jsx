import { createBrowserRouter } from 'react-router-dom'

import Register from "./Register"

export default createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    }
])