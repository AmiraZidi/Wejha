import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editsuggestion } from "../Redux/suggestionSlice";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Editstatus({ ping, setping, trip }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editedsugg, seteditedsugg] = useState({
    status: trip?.status,
  });
  const EditIsDone = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Status Has Been Edited !",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  // select
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };
  return (
    <>
      <button
        className="btn btn-warning btn-sm mr-2"
        onClick={() => handleShow(trip)}
      >
        Change Status
      </button>
      {/* Modal for editing status */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            aria-label="Select status"
            value={selectedOption}
            onChange={(e) =>
              seteditedsugg({ ...editedsugg, status: e.target.value })
            }
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                editsuggestion({
                  id: trip?._id,
                  editedsugg,
                })
              );
              setping(!ping);
              handleClose();
              EditIsDone();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editstatus;
