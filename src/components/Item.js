import "./item.css";

const Item = ({item,deleteItem,togglePacked}) => {
  return (
      <li className={!item.packed?"item":"item disable"}>
        <button className="btn-item" type="button" onClick={()=>togglePacked(item.id)}>✔️</button>
        <span>{item.quantity} {item.description}</span>
        <button className="btn-item" type="button" onClick={()=>deleteItem(item.id)}>❌</button>
      </li>
  )
}

export default Item
