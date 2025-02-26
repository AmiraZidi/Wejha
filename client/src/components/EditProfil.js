import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profil.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { editUser } from "../Redux/userSlice";
import Swal from "sweetalert2";

function EditProfil({ ping, setping }) {
  const suggestions = useSelector((state) => state.suggestion.suggestionList);
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ProfilEdit = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Personal Informations Has Been Edited !",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [editprofil, seteditprofil] = useState({
    name: user?.name,
    last_name: user?.last_name,
    email: user?.email,
    password: "",
  });
  return (
    <div>
      <button className="edit-button" onClick={handleShow}>
        Edit Profile
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Your Profil
            <br />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                defaultValue={user?.email}
                onChange={(e) =>
                  seteditprofil({ ...editprofil, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user?.name}
                onChange={(e) =>
                  seteditprofil({ ...editprofil, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user?.last_name}
                onChange={(e) =>
                  seteditprofil({ ...editprofil, last_name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={user?.password}
                onChange={(e) =>
                  seteditprofil({ ...editprofil, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="close-btn"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="edit-btn"
            onClick={() => {
              dispatch(editUser({ id: user?._id, editprofil }));
              setping(!ping);
              handleClose();
              ProfilEdit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProfil;
