import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addsuggestion } from "../Redux/suggestionSlice";
import Navbarr from "./Navbarr";
import Footer from "./Footer";
import "./profil.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Add({ ping, setping }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newtrip, setnewtrip] = useState({
    id_voyageur: user?._id || "",
    name_voyageur: user?.name || "",
    destination: "",
    Title: "",
    date: "",
    budget: "",
    duree: "",
    description: "",
    img: "",
  });

  const handleChange = (field, value) => {
    setnewtrip((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    dispatch(addsuggestion(newtrip));
    setping(!ping);
    Swal.fire({
      title: "Trip Suggestion Added Successfully!",
      icon: "success",
      draggable: true,
    });
    navigate("/profil");
  };

  return (
    <>
      <Navbarr />
      <div className="add-page">
        <div className="profile-lists">
          <h1 className="add-title">Add a new Trip Suggestion</h1>
          <div className="add-form">
            <label>Image (Only a link)</label>
            <input
              type="url"
              placeholder="Enter Img URL"
              onChange={(e) => handleChange("img", e.target.value)}
            />
            <label>Destination</label>
            <input
              type="text"
              placeholder="Enter Destination"
              onChange={(e) => handleChange("destination", e.target.value)}
            />
            <div className="same-line">
              <div className="same-col">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Enter Post Title"
                  onChange={(e) => handleChange("Title", e.target.value)}
                />
              </div>
              <div className="same-col">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
            </div>
            <div className="same-line">
              <div className="same-col">
                <label>Date</label>
                <input
                  type="month"
                  onChange={(e) => handleChange("date", e.target.value)}
                />
              </div>
              <div className="same-col">
                <label>Duration</label>
                <input
                  type="number"
                  placeholder="Enter Duration"
                  onChange={(e) => handleChange("duree", e.target.value)}
                />
              </div>
            </div>
            <label>Budget type</label>
            <select
              // value={newtrip.budget}
              // onChange={(e) => handleChange("budget", e.target.value)}
              onChange={(e) =>
                setnewtrip({ ...newtrip, budget: e.target.value })
              }
            >
              <option value="" selected disabled>
                -- Choose a type --
              </option>
              <option value="Student">Student</option>
              <option value="Backpacker">Backpacker</option>
              <option value="Economy">Economy</option>
              <option value="Mid-Range">Mid-Range</option>
              <option value="Premium">Premium</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <button type="button" onClick={handleAdd} className="addbtn">
            Add
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Add;
