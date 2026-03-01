import { useEffect, useState } from "react";
import { formatDateTime } from "../utils/formatDate";
import api from "../api/axios";
import { Link } from "react-router-dom";


function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await api.get("/events");
      console.log(res.data.data);
      setEvents(res.data.data);
    } catch (err) {
      alert("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const bookEvent = async (eventId) => {
    try {
      await api.post(`/bookings/events/${eventId}/book`);
      alert("Booking successful!");
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading events...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Events</h2>

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            marginBottom: 15,
            borderRadius: 6
          }}
        >
          <Link to={`/events/${event.id}`}>
            <h3>{event.name}</h3>
          </Link>
          <p style={{
           fontWeight: "bold"
          }}>Desc: {event.description}</p>
          <p>Date: {formatDateTime(event.eventDate)}</p>
          <p>Available Seats: {event.remainingSpots}</p>

          <button
            disabled={event.remainingSpots === 0}
            onClick={() => bookEvent(event.id)}
          >
            {event.remainingSpots === 0 ? "Sold Out" : "Book"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Events;