import { useEffect, useState } from "react";
import api from "../api/axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await api.get("/events");
      setEvents(res.data.data);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  const bookEvent = async (eventId) => {
    try {
      await api.post(`/booking/events/${eventId}/book`, {
        userId: 101
      });
      alert("Booking Successful!");
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Events</h2>
      {events.map((event) => (
        <div key={event.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{event.name}</h3>
          <p>Date: {event.event_date}</p>
          <p>Available Seats: {event.available_seats}</p>
          <button
            disabled={event.available_seats === 0}
            onClick={() => bookEvent(event.id)}
          >
            Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default Events;