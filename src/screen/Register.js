import { useRef, useState, useEffect } from "react";
import React from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Actions/userActions";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
// import { format } from "date-fns";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
import './login.css'
const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [givenName, setGivenName] = useState("");
  const [validGivenName, setValidGivenName] = useState(false);
  const [givenNameFocus, setGivenNameFocus] = useState(false);

  const [surName, setSurName] = useState("");
  const [validSurName, setValidSurName] = useState(false);
  const [surNameFocus, setSurNameFocus] = useState(false);

  const [emailAddress, setEmailAddress] = useState("");
  const [validEmailAddress, setValidEmailAddress] = useState(false);
  const [emailAddressFocus, setEmailAddressFocus] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [validDateOfBirth, setValidDateOfBirth] = useState(false);
  const [dateOfBirthFocus, setSurDateOfBirth] = useState(false);

  const [sex, setSex] = useState("");
  const [validSex, setValidSex] = useState(false);
  const [sexFocus, setSexFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [validated, setValidated] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const options = ["Agender", "Androgyne", "Androgynous", "Bigender", "Cis"];
  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);
  // Chọn ngày tháng năm
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [maxDay, setMaxDay] = useState(31);

  // const history = useHistory();
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, confirmEmail } = userRegister;
  const { accessToken } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken]);


  useEffect(() => {
    updateCurrentDate();
  }, []);

  const updateCurrentDate = () => {
    const currentDate = new Date();
    setDay(currentDate.getDate().toString());
    setMonth((currentDate.getMonth() + 1).toString());
    setYear(currentDate.getFullYear().toString());
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setMonth(selectedMonth);
    validateDay(selectedMonth, day);
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
    validateDay(month, day);
  };

  const validateDay = (selectedMonth, selectedDay) => {
    const maxDayInMonth = getMaxDayOfMonth(selectedMonth, year);
    if (selectedDay > maxDayInMonth) {
      setDay(maxDayInMonth.toString());
    }
    setMaxDay(maxDayInMonth);
  };

  const getMaxDayOfMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const days = Array.from({ length: maxDay }, (_, i) => i + 1);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setSex(event.target.value);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    e.preventDefault();
    if (form.checkValidity() != false) {
      dispatch(
        register(
          givenName,
          userName,
          surName,
          emailAddress,
          pwd,
          sex,
          `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
        )
      );
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              {error && <Message variant="alert-danger">{error}</Message>}
              {confirmEmail && (
                <Message variant="alert-success">
                  You need to confirm your email to complete account
                  registration
                </Message>
              )}
              {loading && <Loading />}

              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    id="givenname"
                    onChange={(e) => setGivenName(e.target.value)}
                    value={givenName}
                    required
                    onFocus={() => setGivenNameFocus(true)}
                    onBlur={() => setGivenNameFocus(false)}
                    className="form-control"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    id="surname"
                    onChange={(e) => setSurName(e.target.value)}
                    value={surName}
                    required
                    onFocus={() => setSurNameFocus(true)}
                    onBlur={() => setSurNameFocus(false)}
                    className="form-control"
                    placeholder="Last name"
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="emailaddress"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  value={emailAddress}
                  required
                  onFocus={() => setEmailAddressFocus(true)}
                  onBlur={() => setEmailAddressFocus(false)}
                  className="form-control"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="user"
                  id="username"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  required
                  onFocus={() => setUserNameFocus(true)}
                  onBlur={() => setUserNameFocus(false)}
                  className="form-control"
                  placeholder="User name"
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
              <Row className="mb-3">
                <Form.Group controlId="daySelect" as={Col} md="4">
                  <Form.Label>Day</Form.Label>
                  <Form.Control
                    as="select"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="monthSelect" as={Col} md="4">
                  <Form.Label>Month</Form.Label>
                  <Form.Control
                    as="select"
                    value={month}
                    onChange={handleMonthChange}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      )
                    )}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="yearSelect" as={Col} md="4">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    as="select"
                    value={year}
                    onChange={handleYearChange}
                  >
                    {Array.from(
                      { length: 50 },
                      (_, i) => new Date().getFullYear() - i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Row>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  value="female"
                  checked={selectedOption === "female"}
                  onChange={handleRadioChange}
                  required
                />
                <Form.Check
                  inline
                  name="group1"
                  label="Male"
                  type="radio"
                  id={`inline-radio-2`}
                  value="male"
                  checked={selectedOption === "male"}
                  onChange={handleRadioChange}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
