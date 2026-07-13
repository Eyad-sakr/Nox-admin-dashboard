import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import { CatgoryData } from '../data/Dashboard';
  const COLORS:string[] = ['#f1e194', '#e8b4c4', '#d17a8e', '#a67a8a'];
  type CategoryData = {
  name: string;
  value: number;
};
  const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as CategoryData;
    const { name, value } = data;
  
    return (
      <div style={{
        backgroundColor: '#4f1724',
        padding: '8px 16px',
        borderRadius: '20px',
        border: '1px solid #8b2635'
      }}>
        <span style={{ color: 'white', fontSize: '14px' }}>
          {name}: {value}%
        </span>
      </div>
    );
    }
}
function Category() {
  return (
    <div className="CategoryChart">
        <div className="Category-Heding">
            <h1>Category Mix</h1>
            <h4>Revenue share by line</h4>
        </div>
          <ResponsiveContainer width={300} height={350}>
      <PieChart>
        <Pie
          data={CatgoryData}
          cx="50%"
          cy="50%"
          innerRadius={60} 
          stroke='none'
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {CatgoryData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
     <div className="Catgory-Legend">
        <p><span className='Sh'>Shirts</span> <span>12%</span></p>
        <p><span className='Tr'>Trousers</span> <span>18%</span></p>
        <p><span className='Ac'>Accessories</span> <span>28%</span></p>
        <p><span className='Ou'>Outerwear</span> <span>42%</span></p>
        
      </div>
    </div>
  )
}

export default Category;