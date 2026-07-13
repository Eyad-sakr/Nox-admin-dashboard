import { topProductsData } from "../data/Dashboard"

function TopProduct() {
  return (
    <div className="TopProducts">
        <div className="Products-Heading">
            <h1>Top Products</h1>
            <h3>This quarter</h3>
        </div>
            <ul>
                {topProductsData.map((product)=>(
                    <li key={product.id}>
                        <div className="TextLeft">{product.rank}</div>
                        <div className="Title">
                            <div className="Main-Title">{product.name}</div>
                            <div className="secondry-Title">{product.sold} sold</div>
                        </div>
                        <div className="TextRight">
                            <div className="price">${product.revenue}K</div>
                            <div className="growth">+{product.growth}%</div>
                        </div>
                    </li>

                ))}

            </ul>
        </div>

    
  )
}

export default TopProduct