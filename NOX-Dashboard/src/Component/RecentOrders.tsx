import { ordersData } from "../data/Dashboard"
function RecentOrders() {
  return ( <div className="OrdersTable">
    <div className="Orders-Heading">
        <div className="Title">
            <h1>Recent Orders</h1>
        <h4>Latest activity from your boutique</h4>
        </div>
        <div className="buuton">
            <button>View All</button>
        </div>
        </div>

        <div className="tablecont">
        <table>
  <thead>
    <tr>
      <th>Order</th>
      <th>Customer</th>
      <th>Item</th>
      <th>Total</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    {ordersData .map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.customer}</td>
        <td>{order.item}</td>
        <td>{order.total}</td>
        <td className={`status ${order.status.toLowerCase()}`}>
  {order.status}
</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
    </div> 
  )
}

export default RecentOrders