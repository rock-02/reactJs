import axios from "axios";

import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const api = "https://fakestoreapi.com/products";

    await axios.get(api).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  const addProduct = async () => {
    const api = "https://fakestoreapi.com/products";

    await axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div id="cards">
      {products.map((product) => (
        <div id="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
