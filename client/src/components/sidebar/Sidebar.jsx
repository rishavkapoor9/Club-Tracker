import "./sidebar.css";

import Groups from "../groups/Groups";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Groups />
      </div>
    </div>
  );
}