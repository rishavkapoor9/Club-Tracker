import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

export default function Home(props) {
  return (
    <>
      <div className="homeContainer">
        <Sidebar user={props.user}/>
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}