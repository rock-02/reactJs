import React from "react";
import Signup from "./components/Signup";
import Card from "./components/Card";

import "./App.css";
import Counter from "./components/Counter";
import Usestate from "./Usestate";
const App = () => {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis.",
      heading: "Amazon services",

      instock: true,
    },

    {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis.",
      heading: "Google services",

      instock: true,
    },
    {
      src: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis.",
      heading: "Cloud services",

      instock: false,
    },
  ];
  return (
    <div>
      {/* App */}
      {/* <h1 >hello</h1> */}
      {/* <About /> */}

      {/* <Signup /> */}
      <div id="cards" style={{ height: "800px" }}>
        {data.map((item, index) => {
          return (
            <Card
              src={item.src}
              heading={item.heading}
              name={item.description}
              instock={item.instock}
              key={index}
            />
          );
        })}
        <Counter />

        <Usestate />
      </div>
    </div>
  );
};

export default App;
