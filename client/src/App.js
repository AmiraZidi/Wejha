import { Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";

import Profil from "./components/Profil";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userCurrent } from "./Redux/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Trips from "./components/Trips";
import { getsuggestion } from "./Redux/suggestionSlice";
import DashAdmin from "./components/DashAdmin";
import Add from "./components/Add";
import { getparticipant } from "./Redux/participantSlice";
import { getchallenge } from "./Redux/challengeSlice";
import SingleTrip from "./components/SingleTrip";
import ProfilAgency from "./components/ProfilAgency";
import ForgotPassword from "./components/ForgotPassword";
import AddProgram from "./components/AddProgram";
import Vote from "./components/Vote";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getsuggestion());
    dispatch(getparticipant());
    dispatch(getchallenge());
  }, [ping]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/addprogram/:id"
          element={<AddProgram ping={ping} setping={setping} />}
        />
        <Route
          path="/trips"
          element={<Trips ping={ping} setping={setping} />}
        />
        <Route path="/trip/:id" element={<SingleTrip />} />
        <Route path="/tripvote/:id" element={<Vote />} />
        <Route path="/add" element={<Add ping={ping} setping={setping} />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={<Profil ping={ping} setping={setping} />}
          />
          <Route
            path="/agencyprofil"
            element={<ProfilAgency ping={ping} setping={setping} />}
          />
          <Route path="/dash" element={<DashAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
