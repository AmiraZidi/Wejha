import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";
import Swal from "sweetalert2";

function DashAdmin() {
  const users = useSelector((state) => state.user.userList || []);
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const travelers = users.filter((el) => el?.category === "voyageur").length;
  const agencies = users.filter((el) => el?.category === "agency").length;
  const allsuggs = suggestions.length;

  const data = {
    labels: ["Travelers", "Agencies", "Programs"],
    datasets: [
      {
        label: "Total Growth",
        data: [travelers, agencies, allsuggs],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      },
    ],
  };

  const StatCard = ({ title, value }) => (
    <div className="stat-box bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
      <h2 className="text-lg font-semibold text-gray-400">{title}</h2>
      <h3 className="text-4xl font-extrabold mt-2">{value}</h3>
    </div>
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    let timerInterval;

    Swal.fire({
      title: "Logging out...",
      html: "You will be logged out in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        dispatch(logout());
        navigate("/"); // Use navigate here instead of Navigate component
      },
    });
  };
  return (
    <div className="dashboard row">
      <header className="dash-nav">
        <div className="nav-header">
          <img src="./Wejha.svg" alt="Wejha Logo" />
          <h1>Wejha</h1>
        </div>
        <nav className="nav-list">
          <ul>
            <li className="list">
              <Link to="/" className="navlink">
                Home
              </Link>
            </li>
            <li className="list active">
              <Link to="/dash" className="navlink">
                Dashboard
              </Link>
            </li>
            <li className="list">
              <Link to="/gestiontrips" className="navlink">
                Trips
              </Link>
            </li>
            <li className="list">
              <Link to="/travelerslist" className="navlink">
                Travelers
              </Link>
            </li>
            <li className="list">
              <Link to="/agencieslist" className="navlink">
                Agencies
              </Link>
            </li>
          </ul>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="dash-body bg-gray-900 text-white p-8 min-h-screen">
        <section className="body-header flex justify-between items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">Hello, Admin!</h1>
          <img
            src="./admin.png"
            alt="Admin"
            className="w-14 h-14 rounded-full border-2 border-gray-600 mr-4"
          />
        </section>

        <section className="body-middle grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <StatCard title="Total Travelers" value={travelers} />
          <StatCard title="Total Agencies" value={agencies} />
          <StatCard title="Total Programs" value={allsuggs} />
        </section>

        <section className="chart-section">
          <h2>Monthly Growth</h2>
          <div className="chart-container">
            <Bar data={data} />
          </div>
        </section>

        <section className="body-bottom mt-12 text-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-400">
            Good work, Admin!
          </h1>
        </section>
      </main>
    </div>
  );
}

export default DashAdmin;
