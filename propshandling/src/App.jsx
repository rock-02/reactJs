import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "Harsh",
      profession: "Developer",
      img: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      friends: false,
    },

    {
      name: "Harshita",
      profession: "Designer",
      img: "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      friends: false,
    },

    {
      name: "ajay",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      profession: "Doctor",
      friends: false,
    },
  ];

  const [realdata, setdata] = useState(data);

  const handleClick = (index) => {
    console.log("Hello world!", index);

    setdata((prev) => {
      const ans = prev.map((item, i) => {
        if (i === index) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });

      console.log(ans);
      return ans;
    });
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-black text-zinc-300 uppercase px-2 py-2">
        Hello world!
      </h1>

      <div id="cards">
        {realdata.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              profession={item.profession}
              img={item.img}
              index={index}
              friends={item.friends}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
