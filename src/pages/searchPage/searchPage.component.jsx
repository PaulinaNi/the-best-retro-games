import "./searchPage.style.css"
import Game from "../../components/game/game.component"
import Search from "../../components/search/search.component"
import { useState } from "react"



export default function SearchPage(props) {

 const { allGames } = props

 const [searchControl, setSearchControl] = useState({
  name: "",
  platform: "",
  singleOrMulti: "",
  category: ""
 })

 function handleFormSubmition(event) {
  event.preventDefault()
 }

 function handleSearchInputs(event) {
  const { value, name } = event.target
  setSearchControl(prevState => {
   return {
    ...prevState,
    [name]: value
   }
  })
 }

 function reset() {
  setSearchControl({
   name: "",
   platform: "",
   singleOrMulti: "",
   category: ""
  })
 }

 let searchedResult = allGames.filter(game => game.name.toLowerCase().includes(searchControl.name.toLowerCase()))

 if (searchControl.platform.length > 1) {
  searchedResult = searchedResult.filter(game => game.platform === searchControl.platform)
 }
 if(searchControl.singleOrMulti === "multi"){
  searchedResult = searchedResult.filter(game => game.multi === true)
 }
 if(searchControl.singleOrMulti === "single"){
  searchedResult = searchedResult.filter(game => game.multi === false)
 }
 if (searchControl.category.length > 1) {
  searchedResult = searchedResult.filter(game => game.category.includes(searchControl.category))
 }

 return (
  <main className="searchPage">
   <h1>Filters:</h1>
   <Search
   handleFormSubmition = {handleFormSubmition}
   searchControl = {searchControl}
   handleSearchInputs = {handleSearchInputs}
   reset = {reset}
   />

   {searchedResult.map(game => <Game key={game._id} game={game} />)}
  </main>
 )
}