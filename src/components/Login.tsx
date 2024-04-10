import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AssessmentDataService from "../services/assessment.service";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  let history = useHistory();

  function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => {
      if (typeof object[key] !== "object") formData.append(key, object[key]);
      else formData.append(key, JSON.stringify(object[key]));
    });
    return formData;
  }

  const onSubmit = () => {
    if (username === "" && password === "") {
      setEmailError(true);
      setPasswordError(true);
      return false;
    } else if (username === "") {
      setEmailError(true);
      return false;
    } else if (password === "") {
      setPasswordError(true);
      return false;
    }
    const data = {
      username: username,
      password: password,
    };
    AssessmentDataService.login(data)
      .then((response: any) => {
        localStorage.setItem("authentication", response.data.authenticated);
        history.push("/assessments");
      })
      .catch((e: Error) => {
        console.log(e);
      });
       
  };
  
  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setUserName(e.target.value)}
            />
            {emailError && (
              <span className="text-danger">Email field is required</span>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <span className="text-danger">Password field is required</span>
            )}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
