import React from "react";

function Education() {
  return (
    <div className = "flex flex-row justify-between items-center">
      <div>
        <img src= "media/images/education.svg" alt = "education" className = "w-full mx-15 "/>

      </div>
     <div>
       <div className = "mx-20">
        <h1 className = "text-2xl font-bold mb-5">Free and open market education</h1>
        <p>Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advance trading.</p>
        <a href= "#" className="flex items-center no-underline" style = {{textDecoration: "none"}}>versity <i class="fa-solid fa-arrow-right"></i></a>
       </div>
       <div className = "mx-20 mt-10">

        <p>TradingQ&A, the most active trading and investment community in <br/>usa for all your market related queries.</p>
        <a href= "#" className="flex items-center no-underline" style = {{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>

       </div>
     </div>
    </div>
  );
}

export default Education;