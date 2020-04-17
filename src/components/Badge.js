import React from "react";
import './Badge.css';


const Badge = (props) => {

  // .badge 
  
  // .badgeContainer 
  
  // .badgeText 
  

  return (
    <section>
      <p><span className="badge">
        {props.lowNum}
      </span></p>
      <span className="badgeHigh">
      {props.highNum}
      </span>
    </section>  
  );
}

export default Badge;