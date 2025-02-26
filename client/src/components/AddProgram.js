import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbarr from "./Navbarr";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { editchallenge } from "../Redux/challengeSlice";

function AddProgram({ ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const challenge = useSelector((state) => state.challenge.challengeList);
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mychallenge = challenge.find((ch) => ch._id === id);
  const thissugg = suggestions.find(
    (el) => el._id === mychallenge?.id_suggestion
  );
  console.log(thissugg);

  const [newprog, setnewprog] = useState({
    id_suggestion: mychallenge?.id_suggestion,
    title_suggestion: mychallenge?.title_suggestion,
    Program: "",
    budget: "",
  });

  if (!mychallenge) {
    return <p>Challenge not found</p>;
  }
  const AddProgram = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Programe Added Successfuly !",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(`/agencyprofil`);
  };
  return (
    <>
      <Navbarr />
      <div className="program">
        <div className="program-container">
          <h3 className="program-title">Add Program</h3>
          <img src="../plane.png" alt="Plane icon" className="planeicon" />
        </div>
        <div className="program-body">
          <div className="program-info1">
            <div className="list-header">
              <h3>About This Trip :</h3>
            </div>
            <div className="sugg-info">
              <label>Name of Agency</label>
              <input
                type="text"
                disabled
                defaultValue={mychallenge?.name_agency}
              />

              <label>Title of Suggestion</label>
              <input
                type="text"
                disabled
                defaultValue={mychallenge?.title_suggestion}
              />

              <label>Date</label>
              <input type="text" disabled defaultValue={thissugg?.date} />

              <label>Destination</label>
              <input
                type="text"
                disabled
                defaultValue={thissugg?.destination}
              />

              <label>Budget</label>
              <input type="text" disabled defaultValue={thissugg?.budget} />
            </div>
          </div>

          <div className="program-info">
            <div className="list-header">
              <h3>Program Details:</h3>
            </div>
            <div className="sugg-info">
              <label>Enter Budget</label>
              <input
                type="number"
                placeholder="Enter Budget"
                onChange={(e) =>
                  setnewprog({ ...newprog, budget: e.target.value })
                }
              />

              <label>Enter Your Program (Please Enter it Organized)</label>
              <textarea
                placeholder="Enter Your Program"
                onChange={(e) =>
                  setnewprog({ ...newprog, Program: e.target.value })
                }
              />

              <button
                className="program-button"
                onClick={() => {
                  dispatch(editchallenge({ id: mychallenge?._id, newprog }));
                  setping(!ping);
                  AddProgram();
                }}
              >
                Add Program
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddProgram;
