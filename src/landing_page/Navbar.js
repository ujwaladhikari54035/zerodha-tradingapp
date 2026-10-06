import React from "react";

function Navbar() {
  return (
    <div className = "flex flex-row text-center justify-between items-center border-b border-gray-300 py-5 w-screen h-15">
      <div>
        <img src = "media/images/logo.svg" alt = "logo" className = "w-35 mx-30 py-5"/>

      </div>
      <div className = "mx-50 mt-3">
        <ul className = "flex flex-row gap-10">
          <li>
            <a className = "text-black" style = {{ textDecoration: 'none'}} href = "#">Signup</a>
          </li>
          <li>
            <a className = "text-black " style = {{ textDecoration: 'none'}} href = "#">About</a>
          </li>
          <li>
            <a className = "text-black" style = {{ textDecoration: 'none'}} href = "#">Products</a>
          </li>
          <li>
            <a className = "text-black " style = {{ textDecoration: 'none'}} href = "#">Support</a>
          </li>
          <li>
            <a className = "text-black " style = {{ textDecoration: 'none'}} href = "#"><i class="fa-solid fa-bars"></i></a>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Navbar;