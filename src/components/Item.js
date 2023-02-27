import React, { useState } from "react";

function Item({ name, category }) {
  
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const liClassName = isAddedToCart ? "in-cart" : "";
  const liLabelText = isAddedToCart ? "Remove From Cart" : "Add To Cart";
  const addToCartButtonClass = isAddedToCart ? "remove" : "add";
  
  function handleAddToCartClick() {
    setIsAddedToCart((isAddedToCart) => !isAddedToCart);
  }

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addToCartButtonClass} onClick={handleAddToCartClick}>{liLabelText}</button>
    </li>
  );
}

export default Item;
