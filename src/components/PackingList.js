import "./packingList.css";
import Item from "./Item";
import { useState } from "react";


const PackingList = ({items,onDeleteItem,togglePacked,deleteAll}) => {
  const[sortItems,setSortItems] = useState('input');

  let sortedItems;
  if(sortItems==='input') sortedItems = items;

  if(sortItems==='description')
    sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  

  if(sortItems==='packed'){
    sortedItems = items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  }
  return (
    <>
    <div className="actions">
      <select name="sort" id="sort" onChange={(e)=>setSortItems(e.target.value)}>
        <option value="input">SORT BY INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION ORDER</option>
        <option value="packed">SORT BY PACKED STATUS</option>
      </select>
      <button className="clear-list" id="sort" onClick={deleteAll}>Clear List</button>
    </div>
  <div className="itemList">
    <ul>
      {sortedItems.map((item)=>(<Item key={item.id} item={item} deleteItem={onDeleteItem} togglePacked={togglePacked}/>))}
    </ul>
  </div>
  </>
  )
}

export default PackingList
