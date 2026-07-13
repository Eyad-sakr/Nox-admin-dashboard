import NoxLogo from "./NOXLOGO"
import { TbLayoutDashboard } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import {  BiMessageRounded} from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { FaAngleLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
 type AsideProps = {
  isOpen: boolean;
};
function Sidebar({isOpen}:AsideProps) {
 
  return (
    <aside className={`sidebar bg-primary w-67.5 h-screen fixed [grid-area:1/1/6/2] ${isOpen ? "open" : ""}`}>
        <div className="Logo flex justify-between flex-col 
 border-b-[#541c28] border-r-[#541c28]">
        <NoxLogo/>
        </div>
        <ul className="flex flex-col gap-(--space-6) mt-(--space-3) ml-(--space-2) mb-(--space-6) ">
            <NavLink  className={({isActive})=>` no-underline ${isActive?'active':''}`}  to={'/'}><li className="li " ><TbLayoutDashboard style={{marginLeft:'12px'}}  className=" w-5.5 h-5.5  " /> DashBoard </li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Analytics'}><li className="li "><IoAnalyticsOutline style={{marginLeft:'12px'}}  className="w-5.5 h-5.5 " /> Analytics</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Sales'}><li className="li"><IoBagHandleOutline style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  " /> Sales</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Custmores'}><li className="li"><BsPersonCircle style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  " />Custmores</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Products'}><li className="li"><AiFillProduct style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  " />Products</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Orders'}><li className="li"><LuListTodo style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  "/> Orders</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Messages'}><li className="li"><BiMessageRounded style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  "/>Messages</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'Setting'}><li className="li"><CiSettings style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  "/> Setting</li></NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to={'/Profile'}><li style={{marginBottom:'64px'}} className="li  ">< ImProfile style={{marginLeft:'12px'}}  className="w-5.5 h-5.5  "/> Profile</li></NavLink>
        </ul>
        <div className="element-center border-t border-[#541c28] p-8 text-[22px] font-medium text-muted ">
            <FaAngleLeft className="mr-5"/>collapse
        </div>
    </aside>
  )
}

export default Sidebar