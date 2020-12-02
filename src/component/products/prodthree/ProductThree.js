import React from "react";
import "./ProductThree.css";
import { useStateValue } from "../../../StateProvider";

function ProductThree({ id, titlethree, image, subtittlethree, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        titlethree: titlethree,
        subtittlethree: subtittlethree,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product-three">
      <img src={image} alt="" />
      <div className="product__info-three">
        <p className="product__info-three-3">{titlethree}</p>
        <p>{subtittlethree}</p>
        <p className="product__price-thre">
          <small>CHF</small>
          <strong>{price}</strong>
        </p>
        
      </div>

 
   
    </div>
  );
}

export default ProductThree;
