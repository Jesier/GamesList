import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export const Profile = () => {
    const [reviews, setReview] = useState([])
    const [game, setGame] = useState({})
    const navigate = useNavigate()
    
    
    const localGameUser = localStorage.getItem("game_user")
    const gameUserObject = JSON.parse(localGameUser)

    useEffect( () => {
        fetch(`http://localhost:8088/reviews`)
        .then(res => res.json())
        .then((reviewArray) => {
            setReview(reviewArray)
        })
    }, []

    )

    useEffect(() => {
        fetch(`http://localhost:8088/games/`)
            .then(res => res.json())
            .then((gameData) => {
                setGame(gameData)
            })
    }, []
    )

return <>
<h2>Your Reviews</h2>
<article className="reviews">
    {
        reviews.map(
            (review) => {
                return <section key={review.id} className="review">
                    <header>{review.gameName}</header>
                    <img className="review_img" src={review.gameCover} width="50px" height="50"></img>
                    <div>{review.description}</div>

                </section>
            }
        )
    }
</article>
</>
}