import React from "react";
import { useRef } from "react";

const UseRefHandle = () => {
  const name = useRef(null);
  const email = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name.current.value);

    console.log(email.current.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="name" /> <br /> <br />
        <input type="email" ref={email} placeholder="email" /> <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UseRefHandle;
