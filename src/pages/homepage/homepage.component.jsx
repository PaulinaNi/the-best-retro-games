import "./homepage.style.css"
import { Link } from "react-router-dom"

import Game from "../../components/game/game.component"


export default function Homepage(props) {
 const { allGames } = props
 return (
  <main className="homepage">
   <Link to='/search'>
    <img src="https://db3pap005files.storage.live.com/y4mdnq1WAFqcxjKvK22eT1vzPyPpgn1vHUgyFEPhlormx5Kf8CvyGgm9HqeQhQSvc8LmcDQ5Wn3cpJgBk5JHrBwGcjdw2dJUTO44EWWUur7UpjdClu8dc6ciqS-YFXRtiecZJLxUfaE2UfDT7Or0hooiYbXxqhSpcUj3ztMuF0NSiEv7OdCVZL6HLeE58s4x8Tj?width=256&height=49&cropmode=none" alt="search button" />
   </Link>
   <section>
    <Link to='/random'>
     <img src="https://db3pap005files.storage.live.com/y4m2yipKOo-tFy_zzqBvz1unxZCHmbuEH-5LqMLnPFymsexl8u5tvQ5z8w0wfbnum2sM1RCOJCdCVsd72aj3aJqMM5irlvVg8hDiW4xUimlY6j3XFKt5WxJ4fjKR4pB091U1zO9Myv0FEWt7v-ZnCDdHcdHjsSM5dsRqzgsVb3-8dKxLcA1G0YyiW64FzHbNpvw?width=256&height=49&cropmode=none" alt="shuffle button" />
    </Link>
   </section>
   {allGames.length < 1 ?
    <p>Loading data...</p> :
    allGames.map(game => <Game key={game._id} game={game} isLinkNeeded={true} />)}

  </main>
 )
}