import React, { useState, useEffect } from "react";
import "./register.css";
import Axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function Register(props) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    username: "", name: "", password1: "", password2: ""
  });
  const [passUnequal, setPassUnequal] = useState("false")
  function userChange(event) {
    const changedValue = event.target.name;
    const newValue = event.target.value;
    setUser((prev) => { return { ...prev, [changedValue]: newValue} })
    if(user.password1===user.password2){setPassUnequal(false)}
    else{setPassUnequal(true)}
  }
  Axios.defaults.withCredentials = true;
  Axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
  };
  Axios.defaults.credentials = 'include';

  function submit(event) {
    if (user.password1 === user.password2) {
      Axios.post("http://localhost:4000/signup", { username: user.username, name: user.name, password: user.password1, admin: false }).then(() => {

        Axios.get("http://localhost:4000/login")
          .then(response => {
            if (response.data.isAuthenticated) {
              setLogin(true)
              props.updateUser(response.data.user);
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


    }
    else{
      alert("passwords don't match")
    }
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
              <input placeholder="Username" className="loginInput" name="name" onChange={userChange} />
              <input placeholder="Email" className="loginInput" name="username" onChange={userChange} />
              <input placeholder="Password" className="loginInput" name="password1" onChange={userChange} />
              <input placeholder="Password Again" className="loginInput" name="password2" onChange={userChange} />
              <button className="loginButton" type="submit" onClick={submit}>Sign Up</button>
              {/* {passUnequal && <p>Passwords don't match</p>} */}
              <button className="loginRegisterButton"><Link to="/" className="link">
                Log into Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}