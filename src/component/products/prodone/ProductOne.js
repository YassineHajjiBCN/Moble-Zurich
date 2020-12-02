import React from "react";
import "./ProductOne.css";
import { useStateValue } from "../../../StateProvider";

function ProductOne({ id, titleone, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        titleone: titleone,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product-one">

      <img src={image} alt="" />
      <div className="product-info-one">
        <p>{titleone}</p>
      </div>
       
    </div>
  );
}

export default ProductOne;
