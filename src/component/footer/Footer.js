import React from "react";
import "./Footer.css";
import { useStateValue } from "../../StateProvider";
import { Link } from 'react-router-dom';

function Footer({ id, title, image, textright, textrightsub, imageapple, imagegoogle, texthead, textlink}) {
  const [{ basket }, dispatch] = useStateValue();

   

  return (
    <div className="footer-ul">
      <div className="text-head">
        <div className="text-head-sub">Example 2020</div>
      <Link>
       <div className="text-sublink">Example</div> 
       </Link>
     </div>    
     <div className="text-head">
        <div className="text-head-sub">Example</div>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div>
      </Link>
      <Link>
       <div className="text-sublink">Example</div>
      </Link>
      <Link>
       <div className="text-sublink">Example</div>
      </Link>
      <Link>
       <div className="text-sublink">Example</div>
      </Link>
     </div>      
     <div className="text-head">
        <div className="text-head-sub">Example</div>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
      <Link>
       <div className="text-sublink">Example</div> 
      </Link>
     </div>    
     <div className="text-head">
        <div className="text-head-sub">Example</div>
      <Link>
       <div className="text-sublink">Example</div> 
       </Link>
       <Link>
       <div className="text-sublink">Example</div> 
       </Link>
       <Link>
       <div className="text-sublink">Example</div> 
       </Link>
        
       <Link>
       <div className="text-sublink">Example</div> 
       </Link>
     </div>  
      </div>

  );
}

export default Footer;

 