import React, { useState } from "react";
import Navbarr from "./Navbarr";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function Vote() {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const challenge = useSelector((state) => state.challenge.challengeList);
  const params = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Navbarr />
      <div className="single-trip">
        {suggestions
          .filter((el) => el._id === params.id)
          .map((el) => (
            <div
              key={el._id}
              className="t-box tour-box-list tt-card bg-white rounded-lg p-6"
            >
              <figure className="overflow-hidden rounded-lg">
                <img
                  src={el?.img}
                  alt="Trip Image"
                  className="w-full h-auto rounded-lg"
                />
              </figure>
              <div className="tour-content mt-4">
                <p className="status flex justify-between items-center">
                  <small className="text-gray-600">{el?.name_voyageur}</small>
                  <big
                    className="text-lg font-semibold"
                    style={{
                      color:
                        el?.status === "Done"
                          ? "red"
                          : el?.status === "Pending"
                          ? "green"
                          : el?.status === "On vote"
                          ? "yellow"
                          : "#333",
                    }}
                  >
                    {el?.status} ...
                  </big>
                </p>
                <h2 className="text-3xl font-bold text-[#4d3a1f] mt-2">
                  {el?.Title}
                </h2>
                <p className="description text-gray-700 mt-2">{el?.description}</p>
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
                        <span className="block text-lg font-semibold">{el?.date}</span>
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
                        <span className="block text-lg font-semibold">{el?.duree}</span>
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
                        <span className="block text-lg font-semibold">{el?.budget}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="container p-6 progs">
        <div className="bg-white rounded-lg overflow-hidden p-6 col">
          <section>
            <h1>Agencies &amp; Programs</h1>
            {challenge
              ?.filter((el) => el?.id_suggestion === params.id)
              .map((el) => (
                <details key={el.id}>
                  <summary>{el?.name_agency}</summary>
                  <p>{el?.Program}</p>
                </details>
              ))}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Vote;
