import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import './GameDetails.css'

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
    <h2 className="title">{game.name}</h2>
    <img className="img" src={game.cover} width="400"height="400"></img>
    <div className="description">{game.description}</div>
    <p>{game.characters?.name}</p>
    <button className="btn_review" onClick={() => { navigateToGameReview(game.id)}}>Review</button>
    </>
)

}