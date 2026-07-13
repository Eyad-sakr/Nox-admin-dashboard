import { Routes,Route } from "react-router-dom"
import './styles/App.css'
import DashboardLayout from "./Layout/DashboardLayout"
import Analytics from "./Pages/Analytics"
import Custmores from "./Pages/Custmores"
import Dashborad from "./Pages/Dashborad"
import Messages from "./Pages/Messages"
import Orders from "./Pages/Orders"
import Products from "./Pages/Products"
import Sales from "./Pages/Sales"
import Profile from "./Pages/Profile"
import Setting from "./Pages/Setting"
function App() {
  return (<>
   <Routes>
    <Route element={<DashboardLayout/>}>
    <Route path="/" element={<Dashborad  username={"Eyad"}/>}/>
    <Route path="/Analytics" element={<Analytics/>}/>
    <Route path="/Custmores" element={<Custmores/>}/>
    <Route path="/Messages" element={<Messages/>}/>
    <Route path="/Orders" element={<Orders/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Sales" element={<Sales/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Setting" element={<Setting/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
