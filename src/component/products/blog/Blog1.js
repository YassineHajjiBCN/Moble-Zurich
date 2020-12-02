import React from "react";
import "./Blog1.css";
import { useStateValue } from "../../../StateProvider";

function Blog({ id, titleblog, image, price, subtitleblog, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        titleblog: titleblog,
        image: image,
        price: price,
        rating: rating,
        subtitleblog: subtitleblog,
 
      },
    });
  };

  return (
    <div className="product-blog">
      <img src={image} alt="" />
      <div className="product__info-blog">
        <p className="titleblog">{titleblog}</p>
        <p className="subtitleblog">{subtitleblog}</p>
      </div>

     

    
    </div>
  );
}

export default Blog;
