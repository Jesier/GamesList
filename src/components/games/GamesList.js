import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './GamesList.css'

export const GamesList = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
        fetch(`http://localhost:8088/games`)
        .then(res => res.json())
        .then((gamesArray) => {
            setGames(gamesArray)
        })
    },
    []
    )

    const navigateToGameDetails = (gameId) => {
        navigate(`/${gameId}`)
    }

return <>
    <h2 className="title">GamesList</h2>

    <article className="games">
        {
            games.map(
                (game) => {
                    return <section key={game.id} className="game">
                        <header className="title">
                            {game.name}
                        
                            </header>
                        <img src={game.cover } width="400px" height="400px"
                        onClick={() => {
                            navigateToGameDetails(game.id)
                        }}/>
                    </section>
                }
            )
        }

    </article>
</>

}