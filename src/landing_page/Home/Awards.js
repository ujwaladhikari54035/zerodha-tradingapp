import React from "react";

function Awards() {
  return (
    <div className = "flex flex-row justify-between items-center text-center mt-10 mb-20 mx-30">
      <div>
        <img src = "media/images/largestBroker.svg" alt = "largestBroker"/>

      </div>
      <div className = "flex flex-col justify-center items-center text-center">
        <h1>Largest stocks Broker in USA</h1>
        <p className = "text-center">2+ Million Users zerodha clients contribute to over 15% of all retail order <br/>volumes in india by trading and invetsing in various:</p>
          <div className = "flex flex-row text-center mt-3">
            <div>
            <ul className = "list-disc list-outside px-5">
             <li>
              <p className = "text-left">Futures and options</p>
              </li>
             <li>
              <p className = "text-left">commodity derivatives</p>
              </li>
             <li>
              <p className = "text-left">Currency derivatives</p>
              </li>
            </ul>
           </div>
           <div>
            <ul className = "list-disc list-outside">
             <li>
              <p className = "text-left">stocks & IPOs</p>
              </li>
             <li>
              <p className = "text-left">Direct mutual funds</p>
              </li>
             <li>
              <p className = "text-left">Bonds and government securities</p>
             </li>
            </ul>

           </div>
          
          </div>
          <img src = "media/images/pressLogos.png" alt = "pressLogos" className = "mt-5 w-95"/>
          

      </div>
    </div>
  );
}

export default Awards;