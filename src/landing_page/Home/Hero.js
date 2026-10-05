import React from "react";

function Hero() {
  return (
    <div className = "flex justify-center items-center flex-col text-center ">
      <div>
        <img src = "media/images/homeHero.png" alt = "hero" className = "mb-5" />

      </div>
      <div>
        <h1 className = "mt-5">Invest in everything</h1>
        <p> Online Platform to invest in stocks, bonds, mutual funds, and more</p>
        <button className="h-11 w-42 border rounded border-blue-500 text-white bg-blue-500 hover:bg-blue-600">Signup Now</button>

      </div>
      
      
    </div>

  );
}

export default Hero;