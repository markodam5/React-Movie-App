import MovieCard from '../components/MovieCard'
import {useState} from 'react'
import '../css/Home.css'

function Home({ favorites, onToggleFavorite }) {
  // State
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "John Wick 4",
      release_date: "2023",
      poster: "https://image.tmdb.org/t/p/w500/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg",
    },
    {
      id: 2,
      title: "Terminator",
      release_date: "1984",
      poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    },
    {
      id: 3,
      title: "The Matrix",
      release_date: "1999",
      poster: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    },
    {
      id: 4,
      title: "One Mile: Chapter one",
      release_date: "2026",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/eQU31KoBAvmqQqiXKn8baR07vK9.jpg",
    },
    {
      id: 5,
      title: "Perfect Blue",
      release_date: "1998",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6WTiOCfDPP8XV4jqfloiVWf7KHq.jpg",
    },
];

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(normalizedQuery)
    );

    const handleSearch = (e) =>{
      e.preventDefault()
    };

  return (
    <div className="home"> 

      {/* Search */}
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." 
          className="search_input"
          // Use state:
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <br/>
      
      <div className="movies-grid">
        {/* map iterate over all of the values from movies array: */}
        {filteredMovies.map(movie => (
            /* Show movies */
            <MovieCard
              movie={movie}
              key={movie.id}
              isFavorite={favorites.some((m) => m.id === movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
        ))}
      </div>
    </div> // End of .home
  )
}

export default Home
