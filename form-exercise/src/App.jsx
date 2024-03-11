import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Harsh",
      bio: "I am a web developer",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww",
    },
  ]);

  const handleClick = (data) => {
    console.log(data);

    setUsers([...users, data]);
  };

  const onRemove = (index) => {
    console.log(index);

    const newUsers = users.filter((user, i) => i !== index);

    setUsers(newUsers);
  };
  return (
    <div id="main">
      <div className="container">
        <Cards users={users} onRemove={onRemove} />
      </div>
      <Form handleClick={handleClick} />
    </div>
  );
};

export default App;
