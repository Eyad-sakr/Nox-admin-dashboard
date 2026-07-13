import { channelData } from "../data/Dashboard"
import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, CartesianGrid } from "recharts"

const CustomTooltip = ({ active, payload }:any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: "#4f1724",
        padding: "10px 12px",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
      }}>
        {payload.map((entry:any, index:number) => (
          <p key={index} style={{ margin: "4px 0", color: "#cca1a5", fontSize: "12px" }}>
            <span style={{ fontWeight: "600" }}>{entry.name}</span>
            <span style={{ color: "#ffffff" }}> : {entry.value}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

function ChannelPerformance() {
  return (
    <div className="ChannelPerformance" style={{
     
    }}>
      <div className="Channel-Heading" style={{ marginBottom: "24px" }}>
        <h1 style={{
          fontSize: "28px",
          fontWeight: "700",
          margin: "0 0 8px 0",
          color: "#ffffff"
        }}>
          Channel Performance
        </h1>
        <h4 style={{
          fontSize: "14px",
          fontWeight: "400",
          margin: "0",
          color: "#b8a8a8",
          letterSpacing: "0.3px"
        }}>
          Sales vs returns by channel
        </h4>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart 
          data={channelData}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid 
            strokeDasharray="0"
            stroke="#4a3640"
            vertical={false}
          />
          <XAxis 
            dataKey="channel"
            axisLine={{ stroke: "#4a3640", strokeWidth: 1 }}
            tick={{ fill: "#b8a8a8", fontSize: 12 }}
            tickLine={{ stroke: "#4a3640" }}
          />
          <YAxis 
            axisLine={{ stroke: "#4a3640", strokeWidth: 1 }}
            tick={{ fill: "#b8a8a8", fontSize: 12 }}
            tickLine={{ stroke: "#4a3640" }}
            domain={[0, 60]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(212, 175, 55, 0.08)" }} />

          <Bar 
            dataKey="sales" 
            fill="#8B3A3A"
            radius={[2, 2, 0, 0]}
            barSize={3}
          />
          <Bar 
            dataKey="returns" 
            fill="#E8D4B8"
            radius={[2, 2, 0, 0]}
            barSize={3}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChannelPerformance