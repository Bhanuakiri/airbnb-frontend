import React from "react";
import "./App.css";
import Index from "./pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import RegisterPage from "./pages/Register";
import PlacesFormPage from "./pages/PlacesFormPage";
import BookingPage from "./pages/BookingPage";
import axios from "axios";
import BookingsPage from "./pages/BookingsPage";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import PlacePage from "./pages/PlacePage";
import PlacesPage from "./pages/PlacesPage";
import { UserContextProvider } from "./UserContext";
axios.defaults.baseURL = "https://airbnb-backend-v1.onrender.com";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" exact element={<Index />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/account" element={<ProfilePage />} />
            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/account/places/:id" element={<PlacesFormPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/account/bookings/:id" element={<BookingPage />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
