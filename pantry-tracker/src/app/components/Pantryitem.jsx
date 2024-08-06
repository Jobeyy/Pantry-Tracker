export default function PantryItem(props) {
  
  return (
  <>
    <div className="flex flex-row items-center justify-between m-3 shadow appearance-none border rounded mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <div>
        {props.pantryitem}
      </div>
      <div className="flex flex-row items-center">
      <div className="flex flex-col">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l m-1">+</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l m-1">-</button>
      </div>
        <div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-1">🗑️</button>
        </div>
    </div>
    </div>
  </>);
}
