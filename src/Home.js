import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom'
import Product from "./Product";
import ProductOne from "./component/products/prodone/ProductOne";
import ProductThree from "./component/products/prodthree/ProductThree";
import Blog from "./component/products/blog/Blog1";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="big-sales-2-div">
         <p className="big-sale-2">Meistgefragte Artikel</p>
        </div>
        <div className="home-row-one">
          <Link to="bed">
          <ProductOne
            id="1"
            titleone="Moderne Schlafbetten"
            image="../productimg/poneimg/pone1.jpg"
          />
          </Link>
          <Link to="/sofa">
          <ProductOne
            id="2"
            titleone="Integrierte Sofas"
            image="../productimg/poneimg/pone2.jpg"
          />
          </Link>
          
        </div>
        <div className="home-row-one">
          <Link to="/desktop">
          <ProductOne
            id="3"
            titleone="Bequemer Schreibtisch"
            image="../productimg/poneimg/pone3.jpg"
          />
          </Link>
          <Link to="salon">
          <ProductOne
            id="4"
            titleone="Möbel für das Wohnzimmer"
            image="../productimg/poneimg/pone4.jpg"
          />
          </Link>
        </div>
        <div className="big-sales-div">
         <p className="big-sale">Meistverkaufte Produkte</p>
        </div>
        <div className="home__row">
        
          <Product
            id="5"
            title="Alfa Dining Chair by Hannes Wettstein für Molteni & C (5 Stk.)"
            price={119.99}
    
            image="https://moebel-zuerich.ch/assets/HMO_2880-200x200.jpg"
          />
           
           <Product
            id="5"
            title="Alfa Dining Chair by Hannes Wettstein für Molteni & C (5 Stk.)"
            price={119.99}
    
            image="https://moebel-zuerich.ch/assets/HMO_2880-200x200.jpg"
          /> 
          <Product
            id="6"
            title="Horgen Glarus Stühle Jg. 1990, stapelbar (1 Stk.)"
            price={98.99}
            image="https://moebel-zuerich.ch/assets/stuhl_diva_horgenglarus-200x200.jpg"
          /> 
          <Product
            id="3254354345"
            title="Schubladenstock mit Linoleumoberfläche, "
            price={298.99}
            image="https://moebel-zuerich.ch/assets/160526__MG_4355-200x200.jpg"
          /> 
        </div>

         
        <div className="home-row-one">
        <Link to="chairs"> 
          <ProductOne
            id="3"
            titleone="Traditionelle Stühle"
            image="../productimg/poneimg/pone5.jpg"
          />
          </Link>
          <Link to="closet">
          <ProductOne
            id="4"
            titleone="Alte Schränke"
            image="../productimg/poneimg/prod1-1.jpg"
          />
          </Link>
          <Link to="lamp">
           <ProductOne
            id="4"
            titleone="Schreibtischlampe"
            image="../productimg/poneimg/prod1-2.jpg"
          />
          </Link>
        </div>
        <div className="big-sales-2-div">
         <p className="big-sale-2">Neueste Angebote</p>
        </div>
         <div className="home-row-three">
          <ProductThree
            id="3"
            image="https://moebel-zuerich.ch/assets/MG_3152-200x200.jpg"
            titlethree="Alfa Dining Chair"
            subtittlethree="B 42cm, T 49cm, SH 45cm, LH 80cm Lager Feldstrasse"
            price={82}
          />
          <ProductThree
            id="3"
            image="https://moebel-zuerich.ch/assets/160526__MG_4355-200x200.jpg"
            titlethree="Schublandestock mit"
            subtittlethree=" jetzt 2x 425.- = 850.- / vorher 2 x 850.- = 1'700.- 
           ."
            price={364}
          />
          <ProductThree
            id="3"
            image="https://moebel-zuerich.ch/assets/HMO_0028-200x200.jpg"
            titlethree="60er Jahre Horgen"
            subtittlethree="jetzt 364.- / vorher 520.-B 45cm, T 70cm, H 80cm Lager  "
            price={126}
          />
          <ProductThree
            id="3"
            image="https://moebel-zuerich.ch/assets/MG_8423-1-200x200.jpg"
            titlethree="DS 31 Sofa von De Sede "
            subtittlethree="L 212cm, B 80cm, SH 36cm, LH 75cm
            Cafeteria Kalkbreite"
            price={1,225}
          />
          <ProductThree
            id="3"
            image="https://moebel-zuerich.ch/assets/MG_5858-1-200x200.jpg"
            titlethree="Palisander Sideboard "
            subtittlethree="L 252cm, T 43cm, H 84cm
            Lager Feldstrasse 24"
            price={2240}
          />
          </div>
          <div className="big-sales-2-div">
         <p className="big-sale-2">Befolgen Sie unsere Empfehlungen zur Inneneinrichtung</p>
        </div>
          <div className="home-row-one">
          <Link to="/Blog2"> 
            <Blog
            id="4"
            titleblog="Die Küche ist der wichtigste Ort des Jahres 2020"
            subtitleblog="Das Jahr, in dem sich der Lebensstil veränderte, natürlich
             durch eine dringende Verpflichtung aufgrund der globalen Pandemie."
            image="../productimg/poneimg/blog-2-pic.jpg"
          />
          </Link>
          <Link to="/Blog2"> 
          <Blog
            id="4"
            titleblog="Zu Hause in der Pandemie überleben"
            subtitleblog="Das Jahr, in dem sich der Lebensstil veränderte, natürlich 
            durch eine dringende Verpflichtung aufgrund der globalen Pandemie."
            image="../productimg/poneimg/blog-1-pic.jpg"
          />
          </Link>
          </div>

 
      </div>
    </div>
  );
}

export default Home;
