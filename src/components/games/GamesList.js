import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
    <h2>GamesList</h2>

    <article className="games">
        {
            games.map(
                (game) => {
                    return <section key={game.id} className="game">
                        <header>{
                            <Link  >{game.name}</Link>
                        }
                            </header>
                        <img src={game.cover} 
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