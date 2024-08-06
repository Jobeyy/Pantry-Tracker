import { useEffect } from "react";
export default function PantryItem({ pantryitem, idx, pantry, setPantry }) {
  function handleDelete(pantryitem, idx) {
    setPantry(pantry.filter((item) => item !== pantryitem));
  }
  function handleAdd(pantryitem, idx) {
    let object = (pantry.find(obj => pantryitem == obj))
    
    Object.assign(object, {item: pantryitem.item, inventory: pantryitem.inventory += 1})
    
    for(let i =0; i > pantry.length; i++){
      if(i === idx){
        setPantry([...pantry, object])
        
      }
    }
  }

  return (
    <>
      <li className="flex justify-between items-center p-3 m-2 bg-white max-w-96 overflow-auto rounded">
        <div>{pantryitem.item}</div>
        <div className="flex flex-col justify-center items-center">
          <p>Quantity: </p>
          {pantryitem.inventory}
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <button
              onClick={() => handleAdd(pantryitem, idx)}
              className="bg-gray-300 hover:bg-green-400 text-gray-800 font-bold py-1 px-2 rounded-l m-1"
            >
              +
            </button>
            <button className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-1 px-2 rounded-l m-1">
              -
            </button>
          </div>
          <div>
            <button
              onClick={() => handleDelete(pantryitem, idx)}
              className="bg-gray-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded-l m-1"
            >
              X
            </button>
            {console.log(pantry)}
          </div>
        </div>
      </li>
    </>
  );
}
