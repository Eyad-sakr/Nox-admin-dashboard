import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import {  useState } from "react";

function DashboardLayout() {
  const [isOpen,setIsopen] = useState(false);
  return (
    <>
      <Sidebar isOpen={isOpen} />
      <Navbar setIsopen={setIsopen} />

      <main className="main-content" >
        <Outlet  />
      </main>
    </>
  );
}

export default DashboardLayout;