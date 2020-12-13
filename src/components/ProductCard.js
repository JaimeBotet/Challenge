import React, { useState } from "react";

import Button from "./Button";

//FunctionBased Component
const ProductCard = (props) => {
  const [img, setImg] = useState(props.img);
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="col mb-4 d-flex flex-column product__card">
      <img className="product__img" src={img} alt="" />
      <div className="d-block">
        <h3 className="h5">{name}</h3>
        <p>{price}€</p>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
