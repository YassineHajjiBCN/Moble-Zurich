import React from "react";
import "./Home.css";
import Product from "./Product";
import ProductOne from "./component/products/prodone/ProductOne";
import ProductThree from "./component/products/prodthree/ProductThree";

function Sofa() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="home-row-three">
          <ProductThree
            id="3"
            image="../productimg/poneimg/pone3.jpg"
            titlethree="The Lean Startup"
            subtittlethree="The new desktop"
            price={98.99}
          />
          <ProductThree
            id="3"
            image="../productimg/poneimg/pone3.jpg"
            titlethree="The Lean Startup"
            subtittlethree="The new desktop"
            price={98.99}
          />
          <ProductThree
            id="3"
            image="../productimg/poneimg/pone3.jpg"
            titlethree="The Lean Startup"
            subtittlethree="The new desktop"
            price={98.99}
          />
          <ProductThree
            id="3"
            image="../productimg/poneimg/pone3.jpg"
            titlethree="The Lean Startup"
            subtittlethree="The new desktop"
            price={98.99}
          />
          <ProductThree
            id="3"
            image="../productimg/poneimg/pone3.jpg"
            titlethree="The Lean Startup"
            subtittlethree="The new desktop"
            price={98.99}
          />

          </div>
      </div>
    </div>
  );
}

export default Sofa;
