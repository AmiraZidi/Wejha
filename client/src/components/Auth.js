import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { userLogin, userRegister } from "../Redux/userSlice";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

function Auth() {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    return () => {
      signUpButton.removeEventListener("click", () => {});
      signInButton.removeEventListener("click", () => {});
    };
  }, []);
  const [isAgency, setIsAgency] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    category: "",
  });
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(userRegister(register));
    navigate("/");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(login));
    navigate("/trips");
  };
  return (
    <>
      <Navbarr />
      <div className="auth">
        <div className="container" id="container">
          {/* REGISTER FORM */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleRegister}>
              <h1>Join Us Today</h1> <br />
              <div style={{display:"flex"}}>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="voyageur"
                    required
                    onChange={(e) =>
                      {setRegister({ ...register, category: e.target.value });
                      setIsAgency(false);
                    }}
                  />
                  Traveler
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="agency"
                    required
                    onChange={(e) =>
                    {  setRegister({ ...register, category: e.target.value });
                      setIsAgency(true);}
                    }
                  />
                  Agency
                </label>
              </div>
              <div className="row">
                <input
                  type="text"
                  placeholder={isAgency ? "Name Agency" : "Name"}
                  required
                  onChange={(e) =>
                    setRegister({ ...register, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder={isAgency ? "Owner Full Name" : "Last Name"}
                  required
                  onChange={(e) =>
                    setRegister({ ...register, last_name: e.target.value })
                  }
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) =>
                  setRegister({ ...register, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Create Password"
                required
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
              />
              <button type="submit">Register</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
              <h1>Welcome Back!</h1> <br />
              <input
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
              <Link to="/forgotpassword">Forgot password?</Link>
              <button type="submit" href="/">
                Log In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>New Here?</h1>
                <p>Create an account to explore exciting features!</p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
              <div className="overlay-panel overlay-left">
                <h1>Already a Member?</h1>
                <p>Sign in to continue your journey with us.</p>
                <button className="ghost" id="signIn">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
