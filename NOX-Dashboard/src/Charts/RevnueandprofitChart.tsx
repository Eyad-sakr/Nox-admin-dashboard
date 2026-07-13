import {ResponsiveContainer,
    CartesianGrid,
    AreaChart,
    Area,
    Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RevnueAndProfitData } from "../data/Dashboard";
import MainHeading from "../Component/MainHeading";
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="custom-tooltip">
      <p className="title">{label}</p>
      <p className="profit">
        Profit: ${payload[1]?.value.toLocaleString()}
      </p>
      <p className="revenue">
        Revenue: ${payload[0]?.value.toLocaleString()}
      </p>
    </div>
  );
};
function RevnueandprofitChart() {
  return(<>
   <div className="RevnueProfitChart" >
   <MainHeading/>
     <ResponsiveContainer     style={{ padding: '20px'}} height={'80%'}>
          <AreaChart data={RevnueAndProfitData}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B2635" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#8B2635" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="prof" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D8A7B1" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#D8A7B1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(216,167,177,0.08)" />
            <XAxis dataKey="Month" stroke="#D8A7B1" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#D8A7B1" fontSize={11} tickLine={false} axisLine={false}
              tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
            <Tooltip content={CustomTooltip} cursor={{ stroke: "#8B2635", strokeOpacity: 0.2 }} />
            <Area type="monotone" dataKey="Revenue" name="Revenue" stroke="#8B2635" strokeWidth={2.5} fill="url(#rev)" />
            <Area type="monotone" dataKey="Profit" name="Profit" stroke="#D8A7B1" strokeWidth={2.5} fill="url(#prof)" />
          </AreaChart>
        </ResponsiveContainer>
    
    </div>
    </>
  );
}
export default RevnueandprofitChart;