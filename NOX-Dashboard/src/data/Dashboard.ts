 import { type IconType } from "react-icons";
 import { FiDollarSign } from "react-icons/fi";
 import { MdOutlineShowChart } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";


 interface CardDatatypes {
    id:number,
    title:string,
    Quantity:string,
    percentage:string,
    icon: IconType
}

export const CardsData:CardDatatypes[] = [
    {id:1,
    title:'Total Revenue',
    Quantity:'$12000',
    percentage:'12.4%',
    icon:FiDollarSign},
    {id:2,
    title:'Net Profit',
    Quantity:'$84000',
    percentage:'8.5%',
    icon:MdOutlineShowChart},
    {id:3,
    title:'Orders',
    Quantity:'12',
    percentage:'2.1%',
    icon:FiShoppingBag},
    {id:4,
    title:'New Custmores',
    Quantity:'10',
    percentage:'18.7%',
    icon:MdPeopleAlt}
]
interface Revenuetypes {
    Month:string,
    Revenue:number
    Profit:number
}
export const RevnueAndProfitData:Revenuetypes[]=[
  { Month: 'Jan', Revenue: 24000, Profit: 13200 },
  { Month: 'Feb', Revenue: 31200, Profit: 11000 },
  { Month: 'Mar', Revenue: 28000, Profit: 14500 },
  { Month: 'Apr', Revenue: 32100, Profit: 16800 },
  { Month: 'May', Revenue: 35400, Profit: 18900 },
  { Month: 'Jun', Revenue: 38900, Profit: 19200 },
  { Month: 'Jul', Revenue: 42000, Profit: 20100 },
  { Month: 'Aug', Revenue: 40800, Profit: 21500 },
  { Month: 'Sep', Revenue: 39500, Profit: 22300 },
  { Month: 'Oct', Revenue: 41200, Profit: 23100 },
  { Month: 'Nov', Revenue: 44900, Profit: 25600 },
  { Month: 'Dec', Revenue: 52000, Profit: 28400 },
]
interface Catgorytypes {
    name:string,
    value:number
}
export const CatgoryData:Catgorytypes[]=[
    {name:'Shirts',value:12},
    {name:'Trousers',value:18},
    {name:'Accessories',value:28},
    {name:'Outerwear',value:42},
]
 
// orders data
interface orderstypes {
    id:string,
    customer:string,
    item: string,
  total:string,
   status:string
}
export const ordersData:orderstypes[] = [
  {
    id: "#MA-10472",
    customer: "Aurélie Dupont",
    item: "Velvet Trench Coat",
    total: '$2840',
    status: "Completed"
  },
  {
    id: "#MA-10471",
    customer: "Mateo Russo",
    item: "Silk Scarf — Bordeaux",
    total: '$320',
    status: "Processing"
  },
  {
    id: "#MA-10470",
    customer: "Hana Yoshida",
    item: "Pearl Drop Earrings",
    total: '$1580',
    status: "Shipped"
  },
  {
    id: "#MA-10469",
    customer: "Lucas Bernard",
    item: "Leather Weekender",
    total: '$3120',
    status: "Pending"
  },
  {
    id: "#MA-10468",
    customer: "Sofia Marchetti",
    item: "Cashmere Wrap",
    total: '$890',
    status: "Completed"
  }
];
interface Activity {
  id: number;
  title: string;
  time: string;
  type: "order" | "inventory" | "review" | "campaign" | "refund";
}

const activitiesData: Activity[] = [
  {
    id: 1,
    title: "New order from Aurélie Dupont",
    time: "2m ago",
    type: "order"
  },
  {
    id: 2,
    title: "Inventory restocked: Silk Scarves",
    time: "18m ago",
    type: "inventory"
  },
  {
    id: 3,
    title: "Customer review received (5★)",
    time: "1h ago",
    type: "review"
  },
  {
    id: 4,
    title: "Campaign 'Winter Atelier' launched",
    time: "3h ago",
    type: "campaign"
  },
  {
    id: 5,
    title: "Refund processed for #MA-10455",
    time: "5h ago",
    type: "refund"
  }
];

export default activitiesData;
interface channeltypes{
    channel:string,
    sales:number,
    returns:number

}
export const channelData:channeltypes[] = [
  {
    channel: "Boutique",
    sales: 32,
    returns: 18,
  },
  {
    channel: "Online",
    sales: 48,
    returns: 28,
  },
  {
    channel: "Concierge",
    sales: 24,
    returns: 14,
  },
];
// Top Products Data

interface TopProduct {
  id: number;
  rank: string;
  name: string;
  sold: number;
  revenue: number;
  growth: number;
}

export const topProductsData: TopProduct[] = [
  {
    id: 1,
    rank: "01",
    name: "Velvet Trench Coat",
    sold: 124,
    revenue: 352,
    growth: 18,
  },
  {
    id: 2,
    rank: "02",
    name: "Silk Scarf Collection",
    sold: 312,
    revenue: 980,
    growth: 24,
  },
  {
    id: 3,
    rank: "03",
    name: "Pearl Drop Earrings",
    sold: 89,
    revenue: 141,
    growth: 12,
  },
  {
    id: 4,
    rank: "04",
    name: "Leather Weekender",
    sold: 56,
    revenue: 175,
    growth: 9,
  },
];

