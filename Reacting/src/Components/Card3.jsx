import React from "react";

function Card3({ image, SongName, Artist }) {
  return (
    <>
      <div className="w-60 h-28 rounded-sm">
        <div className="w-full h-22 bg-zinc-100 mt-20 p-5 flex  gap-2 rounded-lg">
          <div className=" w-1/2 h-20 px-2 py-2 bg-gray-300 rounded-md ">
            <img
              className="w-full h-full object-cover rounded-md"
              src={image}
            ></img>
          </div>
          <div className=" w-1/2 px-3 py-2 bg-zinc-100 rounded-md">
            <h1 className="text-xs font-bold mt-1">{SongName}</h1>
            <h5 className="text-xs mt-0.5">{Artist}</h5>
          </div>
        </div>
        <button className="px-3 py-2 rounded-md mt-1 bg-orange-400 text-xs ml-14 text-white font-bold ">
          Add To Favorites
        </button>
      </div>
    </>
  );
}

export default Card3;
