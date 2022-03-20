import "./homepage.style.css"
import Game from "../../components/game/game.component"
import { Link } from "react-router-dom"

export default function Homepage(props) {
const {allGames} = props
 return (
  <main className="homepage">
   <Link to='/search'>Search all games </Link>
   {allGames.map(game => <Game key={game._id} game={game} isLinkNeeded={true} />)}
   
  </main>
 )
}