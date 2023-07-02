import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./user_home.css"

export default function User_home(props) {
  return (
    <>
      <div className="homeContainer">
        <Sidebar user={props.user}/>
        <Feed />
      </div>
    </>
  );
}