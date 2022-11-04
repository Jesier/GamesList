import { Outlet, Route, Routes } from "react-router"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { GamesList } from "../components/games/GamesList"
import { Navbar } from "../components/nav/Navbar"
import { ApplicationViews } from "./ApplicationViews"
import { Authorized } from "./Authorized"


export const AllViews = () => {
    return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="*" element={
           <Authorized>
           <>
            <Navbar />
            <ApplicationViews />
            </>
            </Authorized>
            
        } />
        </Routes>
    )
}
