import "./sidebar.css";

import Groups from "../groups/Groups";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Groups user={props.user}/>
      </div>
    </div>
  );
}