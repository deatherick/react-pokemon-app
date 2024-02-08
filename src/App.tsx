import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '@components/Navbar'
import { HomePage } from '@pages/HomePage'
import { PokemonPage } from '@pages/PokemonPage'
import { ItemPage } from '@pages/ItemPage'
import { BerryPage } from '@pages/BerryPage'

function App() {
    return (
      <Router basename='/react-pokemon-app'>
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pokemons" element={<PokemonPage />} />
              <Route path="/items" element={<ItemPage />} />
              <Route path="/berries" element={<BerryPage />} />
          </Routes>
      </Router>
    )
}

export default App
