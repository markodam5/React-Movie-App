import './css/App.css'
import { useEffect, useState } from 'react'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

const FAVORITES_STORAGE_KEY = 'movie-app-favorites'

function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorites = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.id === movie.id)
      return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie]
    })
  }

  return (
    <div>
      <NavBar/>
    
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                onToggleFavorite={toggleFavorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorites}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
