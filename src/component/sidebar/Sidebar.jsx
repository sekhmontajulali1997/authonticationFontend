import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
 <>
     {/* Sidebar */}
     <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="">
                  <Link to="dashboard">
                    <i className="fe fe-home" /> <span>Dashboard</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="user">
                    <i className="fe fe-user" /> <span>user</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="all-products">
                  <i className="fa-solid fa-bag-shopping"></i> <span>All Products </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Sidebar */}</>
  )
}

export default Sidebar