import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./user_home.css"

export default function User_home(props) {
  return (
    <>
      <div className="homeContainer ">
        <div className="flexhomecontainer1 homeContainer1">
          <Sidebar user={props.user}/>
        </div>
        <div className="flexhomecontainer2 homeContainer1">
          <Feed />
        </div>
      </div>
    </>
  );
}