import React, { useState } from "react";
import Navbarr from "./Navbarr";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import ProgressBar from "react-bootstrap/ProgressBar";

function SingleTrip() {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const challenge = useSelector((state) => state.challenge.challengeList);
  const votes = useSelector((state) => state.vote.voteList);
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleSection = (el) => {
    setOpenIndex(openIndex === el ? null : el);
  };

  const trip = challenge.find((el) => el._id.toString() === params.id);
  if (!trip) {
    return <p>Trip not found</p>;
  }

  const suggest = suggestions.find((el) => el.Title === trip.title_suggestion);
  if (!suggest) {
    return <p>Suggestion not found</p>;
  }

  const allchallenge = challenge.filter(
    (el) => el.id_suggestion === suggest._id
  );
  const sondage = votes.filter((el) => el?.id_suggestion === suggest._id);

  // Comptage des votes par agence
  const voteCounts = sondage.reduce((acc, vote) => {
    if (vote?.id_agency) {
      acc[vote.id_agency] = (acc[vote.id_agency] || 0) + 1;
    }
    return acc;
  }, {});

  const totalVotes = sondage.length;

  return (
    <>
      <Navbarr />
      <div className="single-trip">
        <div className="t-box tour-box-list tt-card bg-white rounded-lg p-6">
          <figure className="overflow-hidden rounded-lg">
            <img
              src={suggest?.img}
              alt="Trip Image"
              className="w-full h-auto rounded-lg"
            />
          </figure>
          <div className="tour-content mt-4">
            <p className="status flex justify-between items-center">
              <small className="text-gray-600">{suggest?.name_voyageur}</small>
              <big
                className="text-lg font-semibold"
                style={{
                  color:
                    suggest?.status === "Done"
                      ? "red"
                      : suggest?.status === "Pending"
                      ? "green"
                      : suggest?.status === "On vote"
                      ? "yellow"
                      : "#333",
                }}
              >
                {suggest?.status} ...
              </big>
            </p>
            <h2 className="text-3xl font-bold text-[#4d3a1f] mt-2">
              {suggest?.Title}
            </h2>
            <p className="description text-gray-700 mt-2">
              {suggest?.description}
            </p>
            <div className="inner mt-4">
              <ul className="flex flex-wrap gap-4">
                <li className="flex items-center gap-2  p-3 rounded-md ">
                  <img
                    src="http://gfxpartner.com/Frolic/images/icon-date.png"
                    alt="Date"
                    className="w-6 h-6"
                  />
                  <div>
                    <small className="text-gray-500">AVAILABLE</small>
                    <span className="block text-lg font-semibold">
                      {suggest?.date}
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-2  p-3 rounded-md ">
                  <img
                    src="http://gfxpartner.com/Frolic/images/icon-time.png"
                    alt="Duration"
                    className="w-6 h-6"
                  />
                  <div>
                    <small className="text-gray-500">DURATION</small>
                    <span className="block text-lg font-semibold">
                      {suggest?.duree}
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-2  p-3 rounded-md ">
                  <img
                    src="http://gfxpartner.com/Frolic/images/icon-tag.png"
                    alt="Budget"
                    className="w-6 h-6"
                  />
                  <div>
                    <small className="text-gray-500">BUDGET</small>
                    <span className="block text-lg font-semibold">
                      {suggest?.budget}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="progs">
        <div className="con">
          <h1 className="sondage">Vote Result</h1>

          {suggest?.status === "Pending"
            ? allchallenge.map((el) => {
                const agencyVotes = voteCounts[el._id] || 0;
                const percentage =
                  totalVotes > 0 ? (agencyVotes / totalVotes) * 100 : 0;

                return (
                  <div key={el._id}>
                    <h2>{el.name_agency || "Agence inconnue"}</h2>
                    <ProgressBar
                      animated
                      now={percentage}
                      label={`${percentage.toFixed(1)}%`}
                      variant="warning"
                    />
                    <p>{agencyVotes} vote(s)</p>
                  </div>
                );
              })
            : (() => {
                const maxVotedAgency = allchallenge.reduce(
                  (max, el) => {
                    const agencyVotes = voteCounts[el._id] || 0;
                    return agencyVotes > max.votes
                      ? { agency: el, votes: agencyVotes }
                      : max;
                  },
                  { agency: null, votes: 0 }
                );

                if (!maxVotedAgency.agency) return <h2>No votes yet.</h2>;

                const percentage =
                  totalVotes > 0
                    ? (maxVotedAgency.votes / totalVotes) * 100
                    : 0;

                return (
                  <div key={maxVotedAgency.agency._id}>
                    <h2>
                      The Winner is:{" "}
                      {maxVotedAgency.agency.name_agency || "Agence inconnue"}
                    </h2>
                    <ProgressBar
                      animated
                      now={percentage}
                      label={`${percentage.toFixed(1)}%`}
                      variant="warning"
                    />
                    <p>{maxVotedAgency.votes} vote(s)</p>
                  </div>
                );
              })()}
        </div>
        <div className="con">
          <div className="bg-white rounded-lg overflow-hidden p-6 col">
            <section>
              <div>
                <h1>Agencies &amp; Programs</h1>
              </div>
              {challenge
                ?.filter((el) => el?.id_suggestion === suggest?._id)
                .map((el) => (
                  <details key={el._id}>
                    <summary>{el?.name_agency}</summary>
                    <p>{el?.Program}</p>
                  </details>
                ))}
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SingleTrip;
