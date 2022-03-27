import "./randomGamePicker.style.css"
import Game from "../../components/game/game.component"


export default function RandomGamePickerPage(props) {
 const { allGames } = props
 let randomNumber = Math.floor(Math.random()*allGames.length)
 let randomGame = allGames[randomNumber]
 return (
  <main className="randomGamePickerPage">
   <h1>Try this game today!</h1>
   <Game game={randomGame} />
  </main>
 )
}