import React from "react";
import "./SecHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function SecHeader() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
     
    <div className="Secheader">
     <div className="header__nav1"> 

        <Link to='/Sofa'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Neuzugänge</span> 
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Aktionen</span>
          </div>
        </Link> 
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Gastroposten</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Verkauft</span>
             
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Wunschzettel</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Wir</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Dienstleistungen</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Stellen</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Filialen</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option1">
            <span className="header__optionLineTwo2">Impressum</span>
          </div>
        </Link>
        </div>
    </div>
  );
}

export default SecHeader;
