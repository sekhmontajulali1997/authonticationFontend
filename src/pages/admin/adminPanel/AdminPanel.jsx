import { Outlet } from "react-router-dom";
import Sidebar from "../../../component/sidebar/Sidebar";

const AdminPanel = () => {
  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <div className="page-wrapper" style={{ minHeight: 673 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
