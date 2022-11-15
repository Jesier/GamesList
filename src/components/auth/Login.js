import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './Login.css'

export const Login = () => {
    const [email, set] = useState("jesiersantiago@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("game_user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/games")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (<body className="back">
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="text">GamesList</h1>
                    <h2 className="text">Please sign in</h2>
                    <fieldset>
                        <label className="emailL" htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link className="emailL" to="/register">Not a member yet?</Link>
            </section>
        </main>
        </body>
    )
}