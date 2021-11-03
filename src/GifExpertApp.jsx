import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['Messi', 'CR7']
  const [categories, setCategories] = useState(["Messi"]);

  //   const handleAdd = (e) => {
  //     setCategories((cats) => [...categories, "Mbappe"]);
  //   };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <button>Agregar</button>

      <ol>
        {categories.map((category) => (
          //   return <li key={category}>{category}</li>;
          <GifGrid
            key={category}
            category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
