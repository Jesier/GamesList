import { useState } from "react"
import { useNavigate } from "react-router"

export const ReviewForm = () => {
    const [review, update] = useState({
        description: "",
        hide: false
    })

const localGameUser = localStorage.getItem("game_user")
const gameUserObject = JSON.parse(localGameUser)
const navigate = useNavigate()

const handleSaveButtonClick = (event) => {
    event.preventDefault()

const reviewToSendToApi = {
    userId: gameUserObject.id,
    description: review.description,
    hide: review.hide
}

return fetch(`http://localhost:8088/reviews`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify(reviewToSendToApi)
})
.then (res => res.json())
.then(() => {
    navigate("/profile") //maybe this direction
})
}

return (
    <form className="reviewForm">
        <h2 className="reviewForm__title">New Review</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Brief description of problem"
                    value={review.description}
                    onChange={
                        (evt) => {
                            const copy = {...review}
                            copy.description = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input type="checkbox"
                    value={review.hide}
                    onChange={
                        (evt) => {
                            const copy = {...review}
                            copy.hide = evt.target.checked
                            update(copy) //HAVE TO SET TO TRUE ON CHECK
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