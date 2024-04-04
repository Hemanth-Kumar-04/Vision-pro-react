import React from "react";
import './Gallery.css'
function Gallery(){
    return(
      <div className="boduy">

      <div className="container">
        <div className="col-left">
           <div className="row row1"></div>
           <div className="row row2"></div>
           <div className="row row3">
               <div className="row-col left"></div>
               <div className="row-col left"></div>
           </div>
        </div>
        <div className="col-right right">
          <div className="row top"></div>
          <div className="row bottom"></div>
        </div>
        
      </div>
      </div>
    )
}

export default Gallery;