import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./user_home.css"

export default function User_home(props) {
  return (
    <>
      <div className="homeContainer ">
        <div className="homecontainerflex1 homeContainer2">
          <Sidebar user={props.user}/>
        </div>
        <div className="homecontainerflex2 homeContainer2">
          <Feed />
        </div>

        <div className="homecontainerflex3 homeContainer2"></div>  {/* blank div */} 
      </div>
    </>
  );
}