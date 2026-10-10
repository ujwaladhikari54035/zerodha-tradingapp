import React from "react"

function Universe(){
    return(
        <div className="flex items-center justify-evenly border-b border-gray-300 w-full h-full">
            <div className="mt-10 mb-10">

                <img src= "/media/images/coin.png"></img>

            </div>

             <div className="w-60 mt-10 mb-10">

                <h1 className="font-bold text-2xl text-gray-700 mb-3">Coin</h1>
                <p className="text-gray-500 mb-2">Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

</p>
                <a href = "#" className="text-blue-400">Coin<i class="fa-solid fa-arrow-right"></i></a>


            </div>

        </div>
    )
}

export default Universe;