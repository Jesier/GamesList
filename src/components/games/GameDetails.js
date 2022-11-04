import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export const GameDetails = () => {
    const [game, setGame] = useState([])
    const {gameId} = useParams()
    const navigate = useNavigate()

useEffect( () => {
    fetch(`http://localhost:8088/games/${gameId}`)
    .then(res => res.json())
    .then((gameData) => {
        setGame(gameData)
    })
}, []
)

const navigateToGameReview = (gameId) => {
    navigate(`/${gameId}/reviewform`)
}

return (<>
    <h2>{game.name}</h2>
    <div>{game.description}</div>
    <div>{game.characters?.name}</div>
    <button onClick={() => { navigateToGameReview(game.id)}}>Review</button>
    </>
)

}