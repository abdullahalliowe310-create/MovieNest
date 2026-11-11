import { useState } from "react";
import { X, Ticket } from "lucide-react";

export default function BookingModal({ movie, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("14:00");
  const [tickets, setTickets] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  if (!movie) return null;

  const submit = (event) => {
    event.preventDefault();
    if (date) setConfirmed(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-label="Book a ticket" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close booking"><X /></button>
        {confirmed ? (
          <div className="confirmation">
            <span className="confirmation-icon"><Ticket size={28} /></span>
            <h2>Booking details saved!</h2>
            <p>This is a demo booking for <strong>{movie.title}</strong> on {date} at {time}.</p>
            <p className="muted">No payment has been taken and no real ticket has been issued.</p>
            <button className="gold-button" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">MOVIENEST TICKETS</span>
            <h2>Book your movie</h2>
            <p className="muted">You selected <strong>{movie.title}</strong>.</p>
            <form onSubmit={submit} className="booking-form">
              <label>Choose a date<input type="date" value={date} min={new Date().toISOString().split("T")[0]} onChange={(e) => setDate(e.target.value)} required /></label>
              <label>Showtime<select value={time} onChange={(e) => setTime(e.target.value)}><option value="14:00">2:00 PM</option><option value="17:00">5:00 PM</option><option value="20:00">8:00 PM</option></select></label>
              <label>Number of tickets<select value={tickets} onChange={(e) => setTickets(Number(e.target.value))}>{[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? "ticket" : "tickets"}</option>)}</select></label>
              <div className="booking-total"><span>Estimated total</span><strong>₦{(tickets * 5000).toLocaleString("en-NG")}</strong></div>
              <button className="gold-button full-button" type="submit">Continue</button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
