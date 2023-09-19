import { useRef, useState, useEffect, useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { login } from "../Redux/Actions/userActions.js";
import Loading from "../components/LoadingError/Loading";
import Header from "../components/Header.js";
import Message from "../components/LoadingError/Error";
import { Button } from "@mui/material";
import "./login.css";
const Login = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [emailUserName, setEmailUserName] = useState("");
  const [emailUserNameFocus, setEmailUserNameFocus] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, authTokens } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (authTokens) {
      navigate("/home");
    }
  }, [authTokens]);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity() != false) {
      dispatch(login(emailUserName, pwd));
     
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h3>Sign In</h3>
              {loading && <Loading />}
              {error && <Message variant="alert-danger">{error}</Message>}
              <Form.Group className="mb-3">
                <Form.Label>Email address or user name</Form.Label>
                <Form.Control
                  type="text"
                  id="emailUserName"
                  onChange={(e) => setEmailUserName(e.target.value)}
                  value={emailUserName}
                  required
                  onFocus={() => setEmailUserNameFocus(true)}
                  onBlur={() => setEmailUserNameFocus(false)}
                  className="form-control"
                  placeholder="Email address or user name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="form-control"
                  placeholder="Password"
                />
              </Form.Group>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                Forgot <a href="/forgot-pass">password?</a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
