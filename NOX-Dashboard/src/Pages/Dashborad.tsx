import { useEffect, useState } from "react";
import Cards from "../Component/Cards";
import RevnueandprofitChart from "../Charts/RevnueandprofitChart";
import Category from "../Charts/Category";
import RecentOrders from "../Component/RecentOrders";
import Activity from "../Component/Activity";
import ChannelPerformance from "../Charts/ChannelPerformance ";
import TopProduct from "../Component/TopProduct";
type Dashboardprop = {
  username:string
}
function Dashborad({username}:Dashboardprop) {
  const [greeting, setGreeting] = useState("");
  const Hour:number = new Date().getHours();
  useEffect(()=>{
if(Hour < 12){
    setGreeting('Good Morning');
  }else if (Hour < 17) {
    setGreeting ('Good Afternoon');
  }else if (Hour < 22 ) {
    setGreeting('Good Evening');
  }else {
    setGreeting('Good Night');
  }
  },[Hour]);
  return (
    
    <div className="Dashboard">
      <div className="Dashboard-container">
    <div className="Main-Heading">
      <h2>{greeting} , {username}</h2>
      <span>Here's what's happening across the NOX today.</span>
    </div>
    <Cards/>
    <div className="Charts-Row">
      <RevnueandprofitChart/>
       <Category />
    </div>
    <div className="ordersrow">
      <RecentOrders/>
      <Activity/>
    </div>
    <div className="Channelrow">
      <ChannelPerformance />
      <TopProduct/>
      <Activity/>
    </div>
    </div>
    </div>
    
    
  )
}

export default Dashborad