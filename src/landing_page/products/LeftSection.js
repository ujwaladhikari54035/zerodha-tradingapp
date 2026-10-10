import React from "react"
function LeftSection(){
    return (
        <>
        <div className="flex justify-evenly items-center w-4/5">
            <div className="m-5 items-center">
                <img src="/media/images/kite.png"></img>

            </div>
            <div>

                <div className="flex flex-col justify-center items-center w-60">

                <div>
                    <h1 className="font-bold text-2xl mb-4 text-gray-700">Kite</h1>
                    <p className="mb-3 text-gray-500">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                </div>
                    
                

            </div>

               <div>

                    <a href = "" className="text-blue-400">Try demo<i class="fa-solid fa-arrow-right"></i></a>
                    <a href = "" className="text-blue-400 mx-3">Learn more<i class="fa-solid fa-arrow-right"></i></a>



                </div>

            </div>
        
        </div>
        </>
    )
}

export default LeftSection;