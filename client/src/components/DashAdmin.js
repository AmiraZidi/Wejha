import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function DashAdmin() {
  return (
    <div className="dashboard">
      <header className="dash-nav">
        <div className="nav-header">
          <img src="./Wejha.svg" alt="Wejha Logo" />
          <h1>wejha</h1>
        </div>
        <nav className="nav-list">
          <ul>
            <li className="list">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="list active">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="list">
              <Link to="/trips" className="nav-link">
                Trips
              </Link>
            </li>
            <li className="list">
              <Link to="/travelers" className="nav-link">
                Travelers
              </Link>
            </li>
            <li className="list">
              <Link to="/agencies" className="nav-link">
                Agencies
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="dash-body">
        <section className="body-header">
          <h1>Hello Admin!</h1>
          <img src="./admin.png" alt="Admin" />
        </section>
        <section className="body-middle">
          <div className="stat-box travelers">
            <h2>Travelers</h2>
            <h3>XX</h3>
            <p>New Travelers</p>
          </div>
          <div className="stat-box agencies">
            <h2>Agencies</h2>
            <h3>XX</h3>
            <p>New Agencies</p>
          </div>
        </section>
        <section className="body-bottom">
          <h1>Good work, Admin!</h1>
        </section>
      </main>
    </div>
  );
}

export default DashAdmin;
