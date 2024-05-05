import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Card() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 rounded-md bg-zinc-500 overflow-hidden flex">
        <img
          className={`shrink-0 w-full h-full object-cover  transition-transform duration-700 ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" "
        ></img>
        <img
          className={`shrink-0 w-full h-full object-cover transition-transform duration-700  ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" "
        ></img>
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8 flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] bg-[#e4dbdb7b]"
        >
          <FaArrowRightLong size={"0.75em"} />
        </span>
      </div>
    </div>
  );
}

export default Card;
