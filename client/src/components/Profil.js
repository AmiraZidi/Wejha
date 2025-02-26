import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profil.css";
import Navbarr from "./Navbarr";
import Footer from "./Footer";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import EditProfil from "./EditProfil";
import { deletesuggestion } from "../Redux/suggestionSlice";
import { deleteparticipant } from "../Redux/participantSlice";
import { Eye } from "react-bootstrap-icons";
import Editsugg from "./Editsugg";
import Swal from "sweetalert2";

function Profil({ ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const participants = useSelector(
    (state) => state.participant.participantList
  );
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const suremodal = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletesuggestion(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Trip Suggestion has been deleted.",
          icon: "success",
        });
        setping((prevPing) => !prevPing);
      }
    });
  };
  const participantmodal = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteparticipant(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Trip Suggestion has been deleted.",
          icon: "success",
        });
        setping((prevPing) => !prevPing);
      }
    });
  };

  return (
    <>
      <Navbarr />
      <div className="profil">
        <div className="profile-container">
          <div className="profile-infos">
            <img
              src={user?.profile_photo}
              alt="Profile Picture"
              className="profile-pic"
            />
            <div className="profile-info">
              <h2>
                {user?.name} {user?.last_name}
              </h2>
              <p>Travel Enthusiast</p>
              <p>{user?.email}</p>
              <EditProfil ping={ping} setping={setping} />
            </div>
          </div>
          <img src="/tente.png" style={{ width: "30%" }} alt="travelers" />
        </div>

        {/* Trips Suggestion List */}
        <div className="profile-lists">
          <div className="list-header">
            <h3>Trips Suggestion List</h3>
            <Link to="/add" className="add-sugg">
              Add Suggestion
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Destination</th>
                <th>Budget Type</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {suggestions
                ?.filter((el) => el?.id_voyageur === user?._id)
                .map((el) => (
                  <tr key={el._id}>
                    <td>
                      <Link to={`/tripvote/${el?._id}`} className="link">
                        {el?.destination} 
                      </Link>
                    </td>
                    <td>{el?.budget}</td>
                    <td>{el?.status}</td>
                    <td>
                      <Editsugg sugg={el} ping={ping} setping={setping} />
                    </td>
                    <td>
                      <button
                        className="suggdeletebtn"
                        onClick={() => {
                          suremodal(el._id);
                          setping(!ping);
                        }}
                      >
                        <Trash size={25} color="red" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Trips You Are Member In */}
        <div className="profile-lists">
          <div className="list-header">
            <h3>Trips You Are Member In</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {participants
                ?.filter((el) => el.id_traveler === user?._id)
                .map((el) => (
                  <tr key={el?._id}>
                    <td>{el.title_suggestion}</td>
                    <td>
                      <Link to={`/tripvote/${el?.id_suggestion}`} className="link">
                        <button className="suggdeletebtn">
                          <Eye size={25} color="#6a5ac5" />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="suggdeletebtn"
                        onClick={() => {
                          participantmodal(el?._id);
                          setping(!ping);
                        }}
                      >
                        <Trash size={25} color="red" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profil;
