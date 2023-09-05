
import "./stats.css";

const Stats = ({items}) => {
  if(!items.length) return (<footer className="stats"><em>Start Adding some items to the list ✍🏼.</em></footer>)
  const noOfItems = items.length;
  const packedItems = items.filter(item=>item.packed).length;
  const packedPercent = Math.round(packedItems/noOfItems*100)
  return (
    <footer className="stats">
      <em>{packedPercent<100 ? `You have ${noOfItems} Items on your list, and you have already packed ${packedItems} items (${packedPercent}%).`:`You got Everything done. Hurray you are ready for the trip✈️`}</em>
    </footer>
  )
}

export default Stats
