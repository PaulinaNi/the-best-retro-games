import "./platform.style.css"

import Game from "../../components/game/game.component"

export default function Platform(props){
 const {platformGames} = props

 return(
  <section>
   {platformGames.map(game => <Game key={game._id} game={game} />) }
  </section>
 )
}