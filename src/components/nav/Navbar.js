import { Link, Navigate } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {

    return (<ul className="navbar">
        <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
                </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/games">GamesList</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/profile">Profile</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/submission">Submission</Link>
                </li>
        {
            localStorage.getItem("game_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("game_user")
                        Navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
                : ""
        }
    </ul>
    )

}