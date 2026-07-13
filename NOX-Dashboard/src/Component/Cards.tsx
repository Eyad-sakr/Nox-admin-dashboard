import { CardsData } from "../data/Dashboard"
function Cards() {
return (<div className="Cards-Container">
{CardsData.map((Card)=>(
<div className="card" key={Card.id}>
<div className="circle"><Card.icon/></div>
<span>{Card.percentage}</span>
<h3>{Card.title}</h3>
<h1>{Card.Quantity}</h1>
</div>
))}
</div>
)
}

export default Cards