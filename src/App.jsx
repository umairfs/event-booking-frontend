import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import UserBookings from "./pages/UserBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/users/:userId/bookings" element={<UserBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;