import React from "react";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/userSlice";
import Swal from "sweetalert2";

const Navbarr = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    let timerInterval;

    Swal.fire({
      title: "Logging out...",
      html: "You will be logged out in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        dispatch(logout());
        navigate("/");
      },
    });
  };

  return (
    <Navbar expand="lg" className="maincolor" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="../Wejha.svg" alt="Wejha Logo" className="navbar-logo" />
          <h1 className="navbar-title">Wejha</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/trips">
              Trips
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            {user ? (
              <>
                {" "}
                {user?.category == "voyageur" ? (
                  <Nav.Link as={Link} to="/add">
                    Add
                  </Nav.Link>
                ) : null}
                {/* Dropdown pour l'image de profil */}
                <Dropdown align="end" className="ms-3">
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-profile"
                    className="p-0 border-0"
                  >
                    <img
                      src={user?.profile_photo || "./default-avatar.png"}
                      alt="User Avatar"
                      className="rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        border: "2px solid #edd947",
                      }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to={
                        user?.category === "agency"
                          ? "/agencyprofil"
                          : user?.category === "voyageur"
                          ? "/profil"
                          : "/dash"
                      }
                    >
                      Profil
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={handleLogout}
                      className="text-danger"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Nav.Link as={Link} to="/auth">
                <Button variant="light" className="login-btn">
                  Log In
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
