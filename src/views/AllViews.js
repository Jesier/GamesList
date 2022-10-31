import { Outlet, Route, Routes } from "react-router"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Navbar } from "../components/nav/Navbar"
import { Authorized } from "./Authorized"


export const AllViews = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="*" element={
           <Authorized>
           <>
            <Navbar />
            <h1>GameReviews</h1>
            <div>Your reviews go here</div>

            <Outlet />
            
            </>
            </Authorized>
            
        } />
        </Routes>

}
