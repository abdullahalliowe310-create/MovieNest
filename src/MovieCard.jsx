import { CalendarDays, Clock3, Play, Star } from "lucide-react";

export default function MovieCard({ movie, onDetails, onBook }) {
  return (
    <article className="movie-card">
      <button className="poster-button" onClick={() => onDetails(movie)} aria-label={`View ${movie.title} details`}>
        <img src={movie.image} alt={`${movie.title} poster`} loading="lazy" />
        <span className="poster-rating"><Star size={13} fill="currentColor" /> {movie.score}</span>
        <span className="poster-play"><Play size={20} fill="currentColor" /></span>
        <span className="poster-status">{movie.status}</span>
      </button>
      <div className="movie-card-info">
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.genre} <span>•</span> {movie.year}</p>
        </div>
        <div className="movie-meta"><span><Clock3 size={13} /> {movie.duration}</span><span>{movie.rating}</span></div>
        <div className="card-actions">
          <button className="outline-button" onClick={() => onDetails(movie)}>Details</button>
          {movie.status === "Now Showing"
            ? <button className="gold-button" onClick={() => onBook(movie)}>Book now</button>
            : <button className="outline-button gold-outline" onClick={() => onDetails(movie)}>Coming soon</button>}
        </div>
      </div>
    </article>
  );
}
