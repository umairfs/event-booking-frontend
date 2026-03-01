<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# EVENT BOOKING SYSTEM - FRONTEND

# Project Overview

This is the React.js frontend for the Event Booking System. It allows
users to:

-   Register and Login
-   View available events
-   See remaining seats
-   Book events
-   Cancel bookings
-   View their personal bookings

# Tech Stack

-   React (Vite)
-   React Router DOM
-   Axios
-   JWT Authentication
-   LocalStorage (Token storage)

# Project Structure

src/ ├── api/ -> Axios configuration ├── components/ -> Reusable
components (ProtectedRoute) ├── pages/ -> Events, Login, Register,
UserBookings ├── utils/ -> Utility functions (formatDateTime) ├──
App.jsx -> Routes and Navigation └── main.jsx -> Entry point

# Installation

1.  Clone the repository

2.  Navigate to frontend folder

3.  Install dependencies:

    npm install

4.  Start development server:

    npm run dev

The application runs at: http://localhost:5173

Backend Configuration

Ensure backend is running at: http://localhost:5000

Axios base URL is configured inside: src/api/axios.js

# Authentication Flow

-   User registers via /register
-   User logs in via /login
-   JWT token is stored in localStorage
-   Protected routes require authentication
-   Logout clears token

# Main Pages

1.  Events Page
    -   Fetch all events
    -   Show available seats
    -   Book button (requires login)
2.  My Bookings
    -   View user bookings
    -   Cancel booking
    -   Auto refresh after cancellation
3.  Login
    -   Email & password authentication
    -   Stores JWT token
    -   Redirects to Events page
4.  Register
    -   Create new account
    -   Redirects to login

# Environment Setup

Make sure backend CORS is enabled to allow frontend requests.

# Future Improvements

-   Add Toast Notifications
-   Add Loading Skeletons
-   Improve UI styling
-   Add Admin Dashboard
-   Add Seat-level booking UI
-   Add Payment Integration

Author:
Umair Shah
Senior Software Engineer
Email: umair.fs07@gmail.com
GitHub: https://github.com/umairfs/event-booking-frontend


License

This project is for learning and demonstration purposes.
