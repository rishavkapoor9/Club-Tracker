import Groups from "./components/groups/Groups";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import User_home from "./pages/user_home/User_home";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import PostForm from "./components/postForm/PostForm"
import Share from "./components/share/Share";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  Axios.defaults.withCredentials = true;
  Axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
  };
  Axios.defaults.credentials = 'include';

  const [user,setUser]=useState({
    username: "", name: "", admin: false
  });
  const [login, setLogin] = useState(false);

  useEffect(async()=>{
    await Axios.get("http://localhost:4000/login").then((response) => {
      if (response.data.isAuthenticated) {
        updateUser(response.data.user);
      } else {
        console.log("not authenticated")
      }
    })
  },[])
  function updateUser(newUser){
    const {username, name, admin} = newUser
    setUser({username: username, name: name, admin: admin});
    // console.log(user);
    setLogin(true);
  }
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={login? (user.admin? <Home user={user}/>: <User_home user={user}/>): <Login updateUser={updateUser}/>} />;
          <Route path="/login" element={<Login updateUser={updateUser}/>} />;
          <Route path="/register" element={<Register updateUser={updateUser} />} />;
          <Route path="/home" element={user.admin? <Home user={user}/>: <User_home user={user}/>} />;
        </Routes>
    </BrowserRouter>
  )
}

export default App;