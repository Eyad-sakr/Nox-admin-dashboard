import { FaChevronRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserAvatar from "./UserAvtar";
import type React from "react";
type propstype = {
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({setIsopen}:propstype) {
  const toggleSidebar = () => {
    setIsopen(prev => !prev); // لو true يبقى false، ولو false يبقى true
  };
  return (
    <header>
        <div className="container">
      <div className="Header-inner  ">
         <button className="hamburger-btn" onClick={toggleSidebar}>
      ☰
    </button>
        {/* Logo */}
        <div className="Logo ">
          <h4 >NOX</h4>
          <h5 >
            <FaChevronRight />
          </h5>
          <h4 >Dashboard</h4>
        </div>

        {/* Nav Items */}
        <div className="NAV">
          {/* Search Bar */}
          <div className="Search-Bar">
            <svg
             
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
              type="text"
              placeholder="Search orders, customers..."
            />
            <span className="text-muted" >
              ⌘K
            </span>
          </div>

          {/* Icons */}
          <FaRegMessage  className='iconM'/>
          <IoMdNotificationsOutline className='iconf'  />

          {/* User Avatar */}
          <UserAvatar username="Eyad Sakr" role="Owner" />
        </div>
      </div>
      </div>
    </header>
  );
}

export default Navbar;