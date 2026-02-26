import MovieCard from '../components/MovieCard'
import '../css/Favorites.css'

function Favorites({ favorites, onToggleFavorite }) {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favorites movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    )
  }

  return (
    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default Favorites
