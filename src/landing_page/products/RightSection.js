import React from "react"
function RightSection(){
    return (
        <div className="flex items-center justify-evenly">
            <div className="w-60">

                <h1 className="font-bold text-2xl text-gray-700 mb-3">Console</h1>
                <p className="text-gray-500 mb-2">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                <a href = "#" className="text-blue-400">Learn more<i class="fa-solid fa-arrow-right"></i></a>


            </div>
            <div>

                <img src= "/media/images/console.png"></img>

            </div>

        </div>

    )
} 

export default RightSection;