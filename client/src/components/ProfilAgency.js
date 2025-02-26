import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profil.css";
import Navbarr from "./Navbarr";
import Footer from "./Footer";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import EditProfil from "./EditProfil";
import { deletechallenge } from "../Redux/challengeSlice";
import Swal from "sweetalert2";

function ProfilAgency({ ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const challenge = useSelector((state) => state.challenge.challengeList);
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
        dispatch(deletechallenge(id));
        Swal.fire({
          title: "Deleted!",
          text: "You Are Not In This Challenge Anymore.",
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
                {user?.name} by {user?.last_name}
              </h2>
              <p>Travel Agency</p>
              <p>{user?.email}</p>
              <EditProfil ping={ping} setping={setping} />
            </div>
          </div>
          <img src="/tente.png" style={{ width: "30%" }} alt="travelers" />
        </div>
        {/* Trips Accepted List */}
        <div className="profile-lists">
          <div className="list-header">
            <h3>Trips Accepted List</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Budget</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {challenge
                ?.filter((el) => el?.id_agency === user?._id)
                .map((el) => (
                  <tr key={el?._id}>
                    <td>
                      <Link to={`/trip/${el?._id}`} className="link">
                        {el?.title_suggestion}
                      </Link>
                    </td>
                    <td>{el?.budget}</td>
                    <td>
                      {
                        suggestions.find(
                          (sugg) => sugg?._id === el?.id_suggestion
                        )?.status
                      }
                    </td>
                    <td>
                      <Link to={`/addprogram/${el?._id}`} className="link">
                        <PencilSquare size={25} color="green" />
                      </Link>
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
      </div>
      <Footer />
    </>
  );
}

export default ProfilAgency;
