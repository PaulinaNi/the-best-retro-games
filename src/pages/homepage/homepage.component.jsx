import "./homepage.style.css"
import Game from "../../components/game/game.component"
import { Link } from "react-router-dom"

export default function Homepage(props) {
const {allGames} = props
 return (
  <main className="homepage">
   <Link to='/search'>
    <img src="https://db3pap005files.storage.live.com/y4mdnq1WAFqcxjKvK22eT1vzPyPpgn1vHUgyFEPhlormx5Kf8CvyGgm9HqeQhQSvc8LmcDQ5Wn3cpJgBk5JHrBwGcjdw2dJUTO44EWWUur7UpjdClu8dc6ciqS-YFXRtiecZJLxUfaE2UfDT7Or0hooiYbXxqhSpcUj3ztMuF0NSiEv7OdCVZL6HLeE58s4x8Tj?width=256&height=49&cropmode=none" alt="search button" />
   </Link>
   {allGames.length < 1 ?
   <p>Loading data...</p> :
   allGames.map(game => <Game key={game._id} game={game} isLinkNeeded={true} />)}
   
  </main>
 )
}