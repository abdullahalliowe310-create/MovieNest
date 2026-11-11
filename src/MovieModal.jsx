import { CalendarDays, Clock3, Star, X } from "lucide-react";

export default function MovieModal({ movie, onClose, onBook }) {
  if (!movie) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="movie-modal" role="dialog" aria-modal="true" aria-label={`${movie.title} details`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close details"><X /></button>
        <div className="modal-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,8,8,.96), rgba(8,8,8,.3)), url(${movie.backdrop})` }}>
          <span className="eyebrow">{movie.status}</span>
          <h2>{movie.title}</h2>
          <div className="modal-meta"><span><Star size={15} fill="currentColor" /> {movie.score}</span><span><Clock3 size={15} /> {movie.duration}</span><span><CalendarDays size={15} /> {movie.year}</span><span>{movie.rating}</span></div>
        </div>
        <div className="modal-body">
          <p>{movie.description}</p>
          <p className="genre-line">Genre: <strong>{movie.genre}</strong></p>
          {movie.status === "Now Showing" && <button className="gold-button" onClick={() => onBook(movie)}>Book a ticket</button>}
        </div>
      </section>
    </div>
  );
}
