import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDateTime } from "../utils/formatDate";

const UserBookings = () => {
  const { userId } = useParams();   // 🔥 get from route
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, [userId]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/users/${userId}/bookings`
      );
      setBookings(res.data.data);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  };

  const handleCancel = async (bookingId) => {
    try {
      await axios.post(
        `http://localhost:5000/api/bookings/${bookingId}/cancel`
      );
      fetchBookings(); // refresh
    } catch (error) {
      console.error("Error cancelling booking", error);
    }
  };

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.bookingId} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
            <h3>{booking.eventName}</h3>
            <p>Date: {formatDateTime(booking.eventDate)}</p>
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