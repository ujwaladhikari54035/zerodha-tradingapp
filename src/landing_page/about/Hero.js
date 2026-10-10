import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center w-full border-b border-gray-300 h-60 ">
        <h1 className="text-2xl text-gray-700 font-bold">We pioneered the discount broking model in India.<br/>
           Now, we are breaking ground with our technology.</h1>

      </div>
      <div className="flex flex-row w-full mt-5 justify-between border-b border-gray-300 mb-10">
        <div className="w-1/2 px-20 m-4 text-gray-700">
        <p>
          Zerodha was founded on August 15, 2010, with a mission to make trading and investing in India easier, more affordable, and accessible to everyone. The name Zerodha comes from two words: “Zero” and “Rodha,” a Sanskrit word meaning barrier. <br/><br/>Together, they represent the company's goal of removing obstacles for investors and traders.<br/><br/>

         Over the years, Zerodha has grown into India's <br/> largest stockbroker by introducing affordable pricing and developing its own technology.<br/><br/> Today, the platform serves more than 1.8 crore (18 million) clients who place billions of orders every year. Zerodha's investment platforms account for over 15% of India's retail trading volume, making it one of the leading companies in the country's financial industry.<br/>
        </p>
        </div>
        <div className="w-1/2 px-20 m-4 text-gray-700">
          <p>
            Zerodha also provides free online educational resources and community platforms to help traders and investors improve their financial knowledge and make better investment decisions. <br/><br/>Through Rainmatter, its fintech investment fund and startup incubator, Zerodha supports innovative financial technology companies and helps strengthen India's financial markets.<br/><br/>

            The company continues to grow by developing new ideas, improving its services, and introducing better technology. <br/><br/>People can stay informed about Zerodha's latest developments through its official blog, read media coverage about the company, and explore the ideas and values that guide its business and products.
          </p>
          </div>

      </div>
    </div>
  );
}

export default Hero;