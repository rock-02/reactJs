import React, { useState } from "react";

export const Mycontext = React.createContext();
const Context = (props) => {
  const [users, setusers] = useState([
    {
      id: 1,
      name: "John",
      city: "New York",
      img: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "Smith",
      city: "Los Angeles",
      img: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "David",
      city: "Chicago",
      img: "https://source.unsplash.com/random",
    },
  ]);
  console.log(props);
  return (
    <Mycontext.Provider value={{ users, setusers }}>
      {props.children}
    </Mycontext.Provider>
  );
};

export default Context;
