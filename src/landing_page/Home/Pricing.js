import React from "react";

function Pricing() {
  return (
   <div className = "flex flex-row justify-between items-center mt-10 mb-20 mx-30">
    <div>
      <h1 className="text-3xl font-bold">Unbeatable pricing</h1>
      <p className="mt-5">We pioneered the concept of discount broking and price <br/> transparency in india.
        Flat fees and no hidden charges</p>
      <a href= "#" className="flex items-center" style = {{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>

    </div>
    <div className = "flex flex-row ">
      <div className = "flex flex-col items-center justify-center border border-gray-300 text-center w-80 h-60">
        <div>
          <h1>0$</h1>
          <p>Free equity delivery and direct mutual funds</p>

        </div>
      </div>
      <div className = "flex flex-col items-center justify-center border border-gray-300 text-center w-80 h-60">
        <div>

           <h1>20$</h1>
          <p>Intraday and F&O</p>


        </div>
      </div>

    </div>

   </div>
  );
}

export default Pricing;
