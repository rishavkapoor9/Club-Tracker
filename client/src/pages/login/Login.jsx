import React, { useState, useEffect } from "react";
import "./login.css";
import Axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function Login(props) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    username: "", password: ""
  });
  function userChange(event) {
    const changedValue = event.target.name;
    const newValue = event.target.value;
    setUser((prev) => { return { ...prev, [changedValue]: newValue } })
  }
  Axios.defaults.withCredentials = true;
  Axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
  };
  Axios.defaults.credentials = 'include';

  function submit(event) {
    Axios.post("http://localhost:4000/login", { username: user.username, password: user.password}).then(() => {

      Axios.get("http://localhost:4000/login")
        .then(response => {
          if (response.data.isAuthenticated) {
            setLogin(true)
            props.updateUser(response.data.user);
            // alert(response.data.user.admin);
          } else {
            console.log("not logged in")
          }
        })
        .catch(error => {
          console.error("Error occurred:", error);
        });
    })
      .catch(error => {
        console.error("Error occurred:", error);
      });

    event.preventDefault();

  }
  useEffect(() => {
    Axios.get("http://localhost:4000/login").then((response) => {
      if (response.data.isAuthenticated) {
        setLogin(true)
      } else {
        console.log("bye")
      }
    })
  }, [])
  return (
    login === true ? <Navigate to="/home" /> :
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ClubTracker</h3>
          <span className="loginDesc">
            Connect with clubs and never miss any updates from now
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" name="username" autoComplete="off" autoCorrect="off"  onChange={userChange}/>
            <input placeholder="Password" className="loginInput" name="password" type="password" onChange={userChange}/>
            <button className="loginButton"><a onClick={submit} className="link">Log In</a></button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <button className="loginRegisterButton"><Link to="/register" className="link">
              Create a New Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}