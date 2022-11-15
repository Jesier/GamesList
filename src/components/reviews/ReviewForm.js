import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import "./ReviewForm.css"

export const ReviewForm = () => {
    const [game, setGame] = useState({})
    const { gameId } = useParams()
    const [review, update] = useState({
        description: "",
        hide: false,
    })

    useEffect(() => {
        fetch(`http://localhost:8088/games/${gameId}`)
            .then(res => res.json())
            .then((gameData) => {
                setGame(gameData)
            })
    }, []
    )

    const localGameUser = localStorage.getItem("game_user")
    const gameUserObject = JSON.parse(localGameUser)
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const reviewToSendToApi = {
            userId: gameUserObject.id,
            description: review.description,
            hide: review.hide,
            gameName: game.name,
            gameCover: game.cover
        }

        return fetch(`http://localhost:8088/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(reviewToSendToApi),
        })
            .then(res => res.json())
            .then(() => {
                navigate("/profile")
            })
    }

    return (
        <form className="reviewForm">
            <h2 className="reviewForm__title">{game.name}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Review</label>
                    <textarea rows="2" cols="50" type="text"
                        required autoFocus
                        className="form-control2"
                        value={review.description}
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hide">Hide?</label>
                    <input type="checkbox"
                        value={review.hide}
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.hide = evt.target.checked
                                update(copy) 
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit review
            </button>
        </form>
    )
}