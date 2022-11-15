import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"
import './Profile.css'

export const Profile = () => {
    const [reviews, setReview] = useState([])
    // const [game, setGame] = useState({})
    const [filteredReviews, setFiltered] = useState([])
    const [hidden, setHidden] = useState(false)
    // const navigate = useNavigate()


    const localGameUser = localStorage.getItem("game_user")
    const gameUserObject = JSON.parse(localGameUser)

    useEffect(() => {
        fetch(`http://localhost:8088/reviews`)
            .then(res => res.json())
            .then((reviewArray) => {
                setReview(reviewArray)
            })
    }, []

    )

    // useEffect(() => {
    //     fetch(`http://localhost:8088/games/`)
    //         .then(res => res.json())
    //         .then((gameData) => {
    //             setGame(gameData)
    //         })
    // }, []
    // )

    useEffect(
        () => {
            if (gameUserObject.id === reviews.userId) {
                const allReviews = reviews.filter(review => review.userId === gameUserObject.id && review.hide === true)
                setFiltered(allReviews)
            } else {
                const myReviews = reviews.filter(review => review.userId === gameUserObject.id && review.hide === false)
                setFiltered(myReviews)
            }
        },
        [reviews]
    )


    useEffect(
        () => {
            if (hidden) {
                const hiddenReviews = reviews.filter(review => review.userId === gameUserObject.id && review.hide === true)
                setFiltered(hiddenReviews)
            }
            else {
                const allReviews = reviews.filter(review => review.userId === gameUserObject.id && review.hide === false)
                setFiltered(allReviews)
            }
        },
        [hidden]
    )





    return <>

    <body className="proback">
        <h2 className="title">Your Reviews</h2>
        <article className="reviews">
            {
                filteredReviews.map(
                    (review) => {
                        return <section key={review.id} className="review">
                            <header>
                                <Link className="link" to={`/reviews/${review.id}/edit`}>
                                    {review.gameName}
                                </Link>
                            </header>
                            <img className="review_img" src={review.gameCover} width="100px" height="100px"></img>
                            <div className="review_description">{review.description}</div>

                        </section>
                    }
                )
            }
        </article>

        <>
            <button className="btn_yee" onClick={() => { setHidden(true) }}>Show Hidden</button>
            <button className="btn_yee" onClick={() => { setHidden(false) }}>Revealed</button>
        </>
        </body>
    </>
    
}