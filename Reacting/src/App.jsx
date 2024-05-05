// import React from "react";
// import Card1 from "./Components/Card1";
// function App() {
//   const array = [
//     {
//       name: "John",
//       profession: "Painter",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       name: "Satyam",
//       profession: "Student",
//       image:
//         "https://images.unsplash.com/photo-1489913590284-9269438bb411?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       name: "Shubham",
//       profession: "Developer",
//       image:
//         "https://images.unsplash.com/photo-1533931993121-c6668a1c6bfa?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       name: "Anurag",
//       profession: "IAS officer",
//       image:
//         "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300 flex items-center justify-center gap-4">
//         {array.map((item, ind) => (
//           <Card1
//             image={item.image}
//             name={item.name}
//             profession={item.profession}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import Card3 from "./Components/Card3";

function App() {
  const data = [
    {
      img: "https://c.saavncdn.com/513/Albadi-Hood-Haryanvi-2023-20230724122516-500x500.jpg",
      SongName: "Albadi Hood",
      Artist: "Billa Sonipat Aala",
    },
    {
      img: "https://c.saavncdn.com/640/Up-To-U-Haryanvi-2023-20230509232625-500x500.jpg",
      SongName: "Up to U",
      Artist: "Dhandha Nyoliwala",
    },
    {
      img: "https://i.ytimg.com/vi/JIglHLx8zVY/hqdefault.jpg",
      SongName: "Ilzaam",
      Artist: "Arjun Kanunga",
    },
    {
      img: "https://c.saavncdn.com/423/Table-No-21-Hindi-2012-20230616151505-500x500.jpg",
      SongName: "Mann Mera",
      Artist: "Gajendra verma",
    },
    {
      img: "https://c.saavncdn.com/200/About-Me-Haryanvi-2023-20231221145439-500x500.jpg",
      SongName: "About Me",
      Artist: "Addi Kalyan",
    },
    {
      img: "https://c.saavncdn.com/752/Haryana-Hood-Hindi-2022-20230416141822-500x500.jpg",
      SongName: "Haryana Hood ",
      Artist: "Irshad Khan",
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 ">
        <h3 className=" ml-12 px-2 py-2 text-l font-semibold ">Desktop-6</h3>
        <div className="w-3/4 h-[80%] px-3 py-3 bg-zinc-200 ml-32 mt-10 gap-4 rounded-md">
          <div className=" bg-zinc-200  gap-10 flex items-between justify-between">
            <p className="px-3 text-orange-500 text-xm font-bold"> Orange</p>
            <p className="px-3  bg-orange-400 text-xm font-semibold rounded-md text-white">
              {" "}
              Favorites
            </p>
          </div>
          <div className="w-full h-[65%] px-3 py-3 bg-zinc-200   gap-10 flex flex-wrap">
            {data.map((item, index) => (
              <Card3
                image={item.img}
                SongName={item.SongName}
                Artist={item.Artist}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
