
import '@/App.css'
import Navbar from '@components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from '@pages/HomePage';
import { PokemonPage } from '@pages/PokemonPage';
import { ItemPage } from '@pages/ItemPage';
import { BerryPage } from '@pages/BerryPage';

/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export function App() {
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/pokemons" element={<PokemonPage />} />
            <Route path="/items" element={<ItemPage />} />
            <Route path="/berries" element={<BerryPage />} />
        </Routes>
    </Router>
    )
}