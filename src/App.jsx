import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Events from "./pages/Events";
import UserBookings from "./pages/UserBookings";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
        <Link to="/">Events</Link> |{" "}
        <Link to="/users/101/bookings">My Bookings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/users/:userId/bookings" element={<UserBookings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;