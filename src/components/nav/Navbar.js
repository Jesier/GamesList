import { Link, Navigate } from "react-router-dom"

export const Navbar = () => {
    
    return (<ul className="navbar">
       <li className="navbar__item active">
                <Link className="navbar__link" to="/gameslist">GamesList</Link>
                </li>
        {
                localStorage.getItem("game_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("game_user")
                            Navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
    
}