import React from "react"
function Hero(){
    return (
        <div className="flex flex-col justify-center items-center border-b border-gray-300 w-full h-80">
            <h1 className="text-2xl font-semibold text-gray-700 mb-5 mt-5">
                Zerodha Products
            </h1>
            <p className="text-xl text-gray-800 mb-3">Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <a href = "" className="text-blue-400 ">investment offering<i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
    )
}

export default Hero;