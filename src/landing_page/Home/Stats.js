import React from "react";

function Stats() {
  return (
    <div>

      <div className = "flex justify-between items-center mt-10 mb-20 mx-30">
        <div>
          <h1 className = "text-2xl font-bold mb-5">Trust with confidence</h1>
          <h2 className = "text-xl font-semibold mb-3">Customer-first always</h2>
          <p>That's why millions of investors trust zerodha with their money</p>
          <h2 className = "text-xl font-semibold mb-3">No spam or gimmicks</h2>
          <p>No gimmicks, spams, "gamification" - just straightforward, transparent services</p>
          <h2 className = "text-xl font-semibold mb-3">The zerodha universe</h2>
          <p>we are a team of passionate individuals who are dedicated to providing the best possible service to our customers</p>
          <h2 className = "text-xl font-semibold mb-3">Do better with money</h2>
          <p>We believe that everyone should have access to the tools and resources they need to make informed financial decisions</p>

        </div>
        <div>

            <img src = "media/images/ecosystem.png" alt = "ecosystem" className = "w-4/5 mx-30"/>
            <div className = "flex flex-row text-center mx-50 gap-10">
            <a href= "#" className="flex items-center no-underline" style = {{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href= "#" className = "no-underline"  style = {{textDecoration: "none"}}>Try Kits</a>
           </div>

         </div>
         
     </div>

    </div>
    
  );
}

export default Stats;