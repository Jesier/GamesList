import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./ReviewForm.css"

export const ReviewEditor = () => {
    const {reviewId} = useParams()
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState("")
    const [review, assignReview] = useState({
        description:"",
        emergency: false
    })

    useEffect(() => {
        fetch(`http://localhost:8088/reviews/${reviewId}`)
            .then(response => response.json())
            .then((data) => {
                assignReview(data)
            })
    }, [reviewId])

    useEffect(() => {
        if (feedback !== "") {
            // 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    return fetch(`http://localhost:8088/reviews/${review.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json)
        .then(() => {
            setFeedback("Review has been successfully edited")
        })
        .then(() => {
            navigate("/profile")
        }
        )
    }


    const handleDeleteButtonClick = (event) => {
        event.preventDefault()
        return fetch(`http://localhost:8088/reviews/${review.id}`, {
                    method: "DELETE",
                })
                .then(() => {
                    navigate("/profile")
                })
            
        }
    

    return( <> <form className="reviewForm">
    <h2 className="reviewForm__title">Your Review</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
                required autoFocus
                type="text"
                className="form-control2"
                value={review.description}
                onChange={
                    (evt) => {
                        const copy = { ...review }
                        copy.description = evt.target.value
                        assignReview(copy)
                    }
                }>{review.description}</textarea>
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="name">Hide?:</label>
            <input type="checkbox"
                value={review.hide}
                onChange={
                    (evt) => {
                        const copy = { ...review }
                        copy.hide = evt.target.checked
                        assignReview(copy)
                    }
                } />
        </div>
    </fieldset>
    <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary">
        Save Edit
    </button>
    <footer>
    <button
        onClick={(clickEvent) => handleDeleteButtonClick(clickEvent)}
        className="btn btn-primary">
        Delete
    </button>
    </footer>
 </form>
  </>)
 }

