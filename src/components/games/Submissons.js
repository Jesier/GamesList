import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Submissions.css'

export const Submissions = () => {
    const navigate = useNavigate
    const [newGame, setNewGame] = useState({
    name: "",
    description: "",
    cover: ""
})

const handleSaveButtonClick = (event) => {
    event.preventDefault()



    return fetch(`http://localhost:8088/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newGame),
    })
        .then(res => res.json())
        .then(() => {
            navigate("/games")
        })
}


return (
    <form className="submissionForm">
        <h2 className="submissionForm__title">Game Submission</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    required autoFocus
                    type="text"
                    className="form-control"
                    value={newGame.name}
                    onChange={
                        (evt) => {
                            const copy = {...newGame}
                            copy.name = evt.target.value
                            setNewGame(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label className="gDes" htmlFor="description">Game description</label>
                <textarea rows="2" cols="50" type="text"
                    value={newGame.description}
                    onChange={
                        (evt) => {
                            const copy = {...newGame}
                            copy.description = evt.target.value
                            setNewGame(copy)
 
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="cover">Cover Image</label>
                <input 
                    type="text"
                    className="form-control"
                    value={newGame.cover}
                    onChange={
                        (evt) => {
                            const copy = {...newGame}
                            copy.cover = evt.target.value
                            setNewGame(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit submission
        </button>
    </form>
)
}