import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';

import Header from './components/header/header.compnent';
import NavBar from './components/navbar/navBar.component';
import Homepage from './pages/homepage/homepage.component';
import Platform from './pages/platform/platform.component';
import SearchPage from './pages/searchPage/searchPage.component';


function App() {
  const [gamesDB, setGameDB] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/" || "http://localhost:5000/")
      .then(data => data.json())
      .then(games => {        
        games.sort(function compere(gameA,gameB){
          const gameAName = gameA.name.toUpperCase()
          const gameBName = gameB.name.toUpperCase()
          if(gameAName < gameBName){
            return -1
          }
          if(gameAName > gameBName){
            return 1
          } 
          return 0
        })
        setGameDB(games)
      })
      .catch(e => console.log(e))
  }, [])

  const commodore = gamesDB.filter(game => game.platform === "Commodore 64")
  const colecovision = gamesDB.filter(game => game.platform === "ColecoVision")
  const atariXEXL = gamesDB.filter(game => game.platform === "Atari XE/XL")

  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Homepage allGames={gamesDB} />} />
        <Route path='/platform/commodore' element={<Platform platformGames={commodore} />} />
        <Route path='/platform/colecovision' element={<Platform platformGames={colecovision} />} />
        <Route path='/platform/atariXEXL' element={<Platform platformGames={atariXEXL} />} />
        <Route path='/search' element={<SearchPage allGames={gamesDB} />} />
        <Route path='*' exact element={<h1> Error</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
