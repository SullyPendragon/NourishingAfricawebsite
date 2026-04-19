export default function Transparency(){
const data=[
{amount:500, purpose:"Food packs", status:"Used"},
{amount:200, purpose:"Logistics", status:"Pending"}
];

return(
<div className="container">
<h1>Transparency Ledger</h1>
{data.map((d,i)=>(
<div key={i} className="card">
<p>${d.amount}</p>
<p>{d.purpose}</p>
<p>{d.status}</p>
</div>
))}
</div>
)}