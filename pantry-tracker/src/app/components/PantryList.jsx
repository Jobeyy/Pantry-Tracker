import { useState } from "react";
import PantryItem from "./Pantryitem";

export default function PantryList() {
  const [item, setItem] = useState({ item: "", inventory: 1 });
  const [pantry, setPantry] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setPantry([...pantry, item]);
    // DataBase Things Here
    setItem({ item: "", inventory: 0 });
  }
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-gray-200 shadow appearance-none border rounded mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setItem({ ...item, item: e.target.value, inventory: 1 })
              }
              value={item.item}
              type="text"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div>
          {pantry.length > 0 ? (
            <ul className="p-1 divide-y divide-slate-200 bg-slate-200 rounded-md m-2 ">
              {pantry.map((pantryitem, idx) => (
                <PantryItem
                  key={idx}
                  idx={idx}
                  pantryitem={pantryitem}
                  pantry={pantry}
                  setPantry={setPantry}
                />
              ))}
              {console.log(item)}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
