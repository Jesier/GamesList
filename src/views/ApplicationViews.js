import { Outlet, Route, Routes } from "react-router"
import { GameDetails } from "../components/games/GameDetails"
import { GamesList } from "../components/games/GamesList"
import { Submissions } from "../components/games/Submissons"
import { Home } from "../components/reviews/Home"
import { Profile } from "../components/reviews/Profile"
import { ReviewEditor } from "../components/reviews/ReviewEditor"
import { ReviewForm } from "../components/reviews/ReviewForm"
//make home route out of path /
export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="games" element={<GamesList />} />
            <Route path=":gameId" element={<GameDetails />} />
            <Route path=":gameId/reviewform" element={<ReviewForm />} />
            <Route path="reviews/:reviewId/edit" element={ <ReviewEditor/> } />
            <Route path="profile" element={<Profile />} />
            <Route path="submission" element={<Submissions />} />
        </Route>
        </Routes>
    )
}