import React from "react";

function Team() {
  return (
    <div className="border-b border-gray-300">
      <h1 className="text-center text-2xl font-bold">People</h1>
      <div className="mt-5 flex items-center justify-center mb-20">
        <div className="flex flex-col items-center justify-center">
          <img src= "media/images/nithinKamath.jpg" className="w-80 h-80 rounded-full object-cover"></img>
          <div className="mt-2">
            <h2>Nithin kamatha</h2>
           <h4 className="text-sm text-gray-700 text-center">Founder, CEO</h4>

          </div>
          
          
        </div>
        <div className="w-90 h-auto mx-10">
          <p className="text-gray-700">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

           <br/><br/>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

           Playing basketball is his zen.

          </p>

        </div>
      </div>
    </div>
  );
}

export default Team;