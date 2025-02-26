import React, { useState } from "react";
import { useSelector } from "react-redux";
import Trip from "./Trip";
import "./trips.css";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

function Trips({ ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);

  const [filters, setFilters] = useState({
    date: "",
    destination: "",
    duration: "",
  });

  // Fonction pour mettre à jour les filtres
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtrage des voyages en fonction des critères sélectionnés
  const filteredTrips = suggestions.filter((trip) => {
    return (
      (!filters.date || trip.date === filters.date) &&
      (!filters.destination ||
        trip.destination
          .toLowerCase()
          .includes(filters.destination.toLowerCase())) &&
      (!filters.duration || trip.duree === Number(filters.duration))
    );
  });

  return (
    <>
      <Navbarr />
      <div className="tripsec">
        <div className="trips-header">
          <h1>It's time to travel</h1>
          <p>Found {filteredTrips.length} trips</p>
        </div>
        <div className="filter-container">
          <h2>Filter Trips</h2>
          <div className="f-item">
            <label>Date:</label>
            <input
              type="month"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
            />
          </div>
          <div className="f-item">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Enter destination"
              value={filters.destination}
              onChange={handleFilterChange}
            />
          </div>
          <div className="f-item">
            <label htmlFor="duration">Duration (days):</label>
            <input
              type="number"
              id="duration"
              name="duration"
              min={1}
              placeholder="Enter duration"
              value={filters.duration}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <div className="trips">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((el) => <Trip key={el.id} suggestion={el} ping={ping} setping={setping}/>)
          ) : (
            <p>No trips match your criteria.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Trips;
