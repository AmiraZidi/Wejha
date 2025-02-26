import React, { useState } from "react";
import "./trips.css";
import { useDispatch, useSelector } from "react-redux";
import { addparticipant, deleteparticipant } from "../Redux/participantSlice";
import { addchallenge, deletechallenge } from "../Redux/challengeSlice";
import { deletesuggestion } from "../Redux/suggestionSlice";
import Swal from "sweetalert2";

function Trip({ suggestion, ping, setping }) {
  const user = useSelector((state) => state.user.user);
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const challenge = useSelector((state) => state.challenge.challengeList);
  const participants = useSelector(
    (state) => state.participant.participantList
  );
  const dispatch = useDispatch();
  const [newparticipant, setnewparticipant] = useState({
    id_suggestion: suggestion?._id,
    title_suggestion: suggestion?.Title,
    id_traveler: user?._id,
    name_traveler: user?.name + " " + user?.last_name,
  });
  const myid = user?._id;
  const [newchallenge, setnewchallenge] = useState({
    id_suggestion: suggestion?._id,
    title_suggestion: suggestion?.Title,
    id_agency: user?._id || myid,
    name_agency: user?.name,
  });
  const member = participants.find(
    (p) => p?.id_suggestion === suggestions?._id
  );
  const mychallenge = challenge.find(
    (ch) => ch?.id_suggestion === suggestions?._id
  );

  const suremodal = () => {
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
        dispatch(deletesuggestion(suggestion?._id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Trip Suggestion has been deleted.",
          icon: "success",
        });
        setping((prevPing) => !prevPing);
      }
    });
  };
  const memberin = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You are now member in this trip !",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="t-box tour-box-list">
      <figure>
        <img src={suggestion?.img} alt="Image" />
      </figure>
      <div className="tour-content">
        <p className="status">
          <small>{suggestion?.name_voyageur}</small>
          <big
            style={{
              color:
                suggestion?.status === "Done"
                  ? "red"
                  : suggestion?.status === "Pending"
                  ? "green"
                  : suggestion?.status === "On vote"
                  ? "yellow"
                  : "#333",
            }}
          >
            {suggestion?.status} ...
          </big>
        </p>
        <h2>{suggestion?.Title}</h2>
        <p className="description">{suggestion?.description}</p>
        <div className="inner">
          <ul>
            <li>
              <div>
                {" "}
                <img
                  src="http://gfxpartner.com/Frolic/images/icon-date.png"
                  alt="Image"
                />{" "}
                <small>AVAILABLE</small> <span>{suggestion?.date}</span>{" "}
              </div>
            </li>
            <li>
              <div>
                {" "}
                <img
                  src="http://gfxpartner.com/Frolic/images/icon-time.png"
                  alt="Image"
                />{" "}
                <small>DURATION</small> <span>{suggestion?.duree}</span>{" "}
              </div>
            </li>
            <li>
              <div>
                {" "}
                <img
                  src="http://gfxpartner.com/Frolic/images/icon-tag.png"
                  alt="Image"
                />{" "}
                <small>Budget</small> <span>{suggestion?.budget}</span>{" "}
              </div>
            </li>
          </ul>
          {user?.category == "voyageur" ? (
            <button
              className={`participate ${
                participants?.some((p) => p.id_suggestion === suggestion?._id)
                  ? "member-btn"
                  : suggestion?.id_voyageur === user?._id
                  ? "delete-btn"
                  : "participate-btn"
              }`}
              onClick={() => {
                if (suggestion?.id_voyageur === user?._id) {
                  suremodal();
                  setping((prevPing) => !prevPing);
                } else {
                  dispatch(addparticipant(newparticipant));
                  memberin();
                }
                setping((prevPing) => !prevPing);
              }}
            >
              {participants?.some((p) => p.id_suggestion === suggestion?._id)
                ? "Member"
                : suggestion?.id_voyageur === user?._id
                ? "Delete"
                : "Participate"}
            </button>
          ) : user?.category == "agency" ? (
            <button
              className={`participate ${
                challenge?.some(
                  (ch) =>
                    ch.id_suggestion === suggestion?._id &&
                    ch?.id_agency === user?._id
                )
                  ? "in-btn"
                  : "participate-btn"
              }`}
              onClick={() => {
                if (
                  !challenge?.some(
                    (ch) =>
                      ch.id_suggestion === suggestion?._id &&
                      ch?.id_agency === user?._id
                  )
                ) {
                  dispatch(addchallenge(newchallenge));
                  setping((prevPing) => !prevPing);
                }
              }}
            >
              {challenge?.some(
                (ch) =>
                  ch.id_suggestion === suggestion?._id &&
                  ch?.id_agency === user?._id
              )
                ? "In Competition"
                : "Accept Challenge"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Trip;
