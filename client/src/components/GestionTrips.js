import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deletesuggestion } from "../Redux/suggestionSlice";
import Editstatus from "./Editstatus";
import Navadmin from "./Navadmin";

function SuggestionsTable({ ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const participants = useSelector(
    (state) => state.participant.participantList
  );
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
          text: "This Trip Suggestion has been deleted.",
          icon: "success",
        });
        setping((prevPing) => !prevPing);
      }
    });
  };

  const members = participants.filter(
    (el) => el.id_suggestion === suggestions._id
  );

  return (
    <div className="ges-trips">
      <Navadmin/>
      <div className="container mt-4" style={{ backgroundColor: "#212529" }}>
        <h2 className="text-center text-white">Manage Suggestions</h2>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Budget</th>
              <th>Date</th>
              <th>Members</th>
              <th>Status</th>
              <th>Traveler</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suggestions && suggestions.length > 0 ? (
              suggestions.map((trip) => {
                // Filter the members for the current trip
                const members = participants.filter(
                  (el) => el.id_suggestion === trip._id
                );
                return (
                  <tr key={trip?._id}>
                    <td>{trip?.destination}</td>
                    <td>{trip?.budget}</td>
                    <td>{trip?.date}</td>
                    <td>{members.length}</td>{" "}
                    {/* Correctly show the number of members */}
                    <td>
                      <span
                        className={`badge ${
                          trip?.status === "Done"
                            ? "bg-danger"
                            : "bg-warning text-black"
                        }`}
                      >
                        {trip?.status}
                      </span>
                    </td>
                    <td>{trip?.name_voyageur}</td>
                    <td>
                      <Editstatus ping={ping} setping={setping} trip={trip} />
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => suremodal(trip?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No trips available at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SuggestionsTable;
