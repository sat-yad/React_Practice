import React, { useState } from "react";

function Card1({ image, name, profession }) {
  const [val, setVal] = useState(true);
  return (
    <div className="w-52 bg-white rounded-md  overflow-hidden">
      <div className="w-full  h-40  bg-sky-300">
        <img className="w-full h-full object-[center_top]" src={image}></img>
      </div>
      <div className="w-full p-3">
        <h3> {name}</h3>
        <h3 className="text-xl font-semibold">{profession}</h3>
        <button
          onClick={() => setVal(() => !val)}
          className={`px-3 py-1  mt-4 rounded-md ${
            val ? "bg-blue-500" : "bg-green-600"
          } text-xs text-zinc-200`}
        >
          {val == true ? "Add Friends" : "Friends"}
        </button>
      </div>
    </div>
  );
}

export default Card1;
