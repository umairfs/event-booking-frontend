import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { formatDateTime } from "../utils/formatDate";

const UserBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get("/bookings/my");
      setBookings(res.data.data);
    } catch (error) {
      console.error("Error fetching bookings", error);

      // If unauthorized → redirect to login
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (bookingId) => {
    try {
      await api.post(`/bookings/${bookingId}/cancel`);
      fetchBookings(); // refresh after cancel
    } catch (error) {
      console.error("Error cancelling booking", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.bookingId}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              margin: 10
            }}
          >
            <h3>{booking.name}</h3>
            <p>Desc: {booking.eventDescription}</p>
            <p>Date: {formatDateTime(booking.eventDate)}</p>
            <p>Booking Date: {formatDateTime(booking.createdAt)}</p>
            <p>Status: {booking.status}</p>

            {booking.status === "CONFIRMED" && (
              <button onClick={() => handleCancel(booking.bookingId)}>
                Cancel
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default UserBookings;