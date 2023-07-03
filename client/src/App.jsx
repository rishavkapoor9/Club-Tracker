import Groups from "./components/groups/Groups";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import User_home from "./pages/user_home/User_home";
import { BrowserRouter, useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import PostForm from "./components/postForm/PostForm"
import Share from "./components/share/Share";
import Axios from "axios";
import { useEffect, useState } from "react";
import Clubpage from "./pages/clubpage/Clubpage";

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
  function Club(){
    const {club} = useParams();
    return <Clubpage club={club} user={user} />
  }
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={login? (user.admin? <Home user={user}/>: <User_home user={user}/>): <Login updateUser={updateUser}/>} />;
          <Route path="/login" element={<Login updateUser={updateUser}/>} />;
          <Route path="/register" element={<Register updateUser={updateUser} />} />;
          <Route path="/home" element={user.admin? <Home user={user}/>: <User_home user={user}/>} />;
          <Route path="/clubs/:club" element={<Club/>} />;
        </Routes>
    </BrowserRouter>
  )
}

export default App;