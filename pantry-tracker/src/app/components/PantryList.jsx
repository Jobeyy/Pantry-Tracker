import { useState } from "react";
import PantryItem from "./Pantryitem";

export default function PantryList() {
  const [item, setItem] = useState("");
  const [pantry, setPantry] = useState([])
  function handleSubmit(e) {
    e.preventDefault();
    setPantry([...pantry, item])
    // DataBase Things Here
    setItem("")
  }
  return (
    <>
      <form className="flex justify-center"onSubmit={handleSubmit}>
        <input className="bg-gray-200 shadow appearance-none border rounded mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          type="text"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"type="submit">Add</button>
      </form>
      <ul>
      {pantry.map((pantryitem, idx)=>(<PantryItem key={idx} pantryitem={pantryitem}/>))}
      </ul>
    </>
  );
}
