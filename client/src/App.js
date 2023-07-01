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

function App() {
  return <Home />
}

export default App;