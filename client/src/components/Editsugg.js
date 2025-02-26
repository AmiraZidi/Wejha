import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { PencilSquare } from "react-bootstrap-icons";
import { editsuggestion } from "../Redux/suggestionSlice";
import Swal from "sweetalert2";

function Editsugg({ sugg, ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editedsugg, seteditedsugg] = useState({
    img: sugg?.img,
    destination: sugg?.destination,
    Title: sugg?.Title,
    description: sugg?.description,
    date: sugg?.date,
    duree: sugg?.duree,
    budget: sugg?.budget,
  });
  const EditIsDone = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Trip Suggestion Has Been Edited !",
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
      <button className="suggdeletebtn" onClick={() => handleShow(sugg)}>
        <PencilSquare size={25} color="green" />
      </button>
      {/* Modal for Edit Suggestion */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Suggestion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                type="URL"
                defaultValue={sugg?.img}
                onChange={(e) =>
                  seteditedsugg({
                    ...editedsugg,
                    img: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                defaultValue={sugg?.destination}
                onChange={(e) =>
                  seteditedsugg({
                    ...editedsugg,
                    destination: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={sugg?.Title}
                onChange={(e) =>
                  seteditedsugg({
                    ...editedsugg,
                    Title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                defaultValue={sugg?.description}
                onChange={(e) =>
                  seteditedsugg({
                    ...editedsugg,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="month"
                defaultValue={sugg?.date}
                onChange={(e) =>
                  seteditedsugg({
                    ...editedsugg,
                    date: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="number"
                defaultValue={sugg?.duree}
                onChange={(e) =>
                  seteditedsugg({
                    ...editedsugg,
                    duree: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleSelect">
              <Form.Label>Budget type</Form.Label>
              <Form.Control
                as="select"
                value={selectedOption}
                onChange={(e) =>
                  seteditedsugg({ ...editedsugg, budget: e.target.value })
                }
              >
                <option disabled>-- Choose an option --</option>
                <option value="Student">Student</option>
                <option value="Backpacker">Backpacker</option>
                <option value="Economy">Economy</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </Form.Control>
            </Form.Group>
          </Form>
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
                  id: sugg?._id,
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

export default Editsugg;
