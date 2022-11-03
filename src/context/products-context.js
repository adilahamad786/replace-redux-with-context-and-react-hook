import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (productId) => {}
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    const prodIndex = productsList.findIndex((p) => p.id === productId);
    const newFavStatus = !productsList[prodIndex].isFavorite;
    const updatedProducts = [...productsList];
    updatedProducts[prodIndex] = {
      ...productsList[prodIndex],
      isFavorite: newFavStatus,
    };

    setProductsList(updatedProducts);
  };

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFav : toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
