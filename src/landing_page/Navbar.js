import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className = "flex flex-row text-center justify-between items-center border-b border-gray-300 py-5 w-screen h-15">
      <div>
        <img src = "media/images/logo.svg" alt = "logo" className = "w-35 mx-30 py-5"/>

      </div>
      <div className = "mx-50 mt-3">
        <ul className = "flex flex-row gap-10">
          <li>
            <Link className = "text-black" style = {{ textDecoration: 'none'}} to = "/signup">Signup</Link>
          </li>
          <li>
            <Link className = "text-black " style = {{ textDecoration: 'none'}} to = "/about">About</Link>
          </li>
          <li>
            <Link className = "text-black" style = {{ textDecoration: 'none'}} to = "/product">Product</Link>
          </li>
          <li>
            <Link className = "text-black " style = {{ textDecoration: 'none'}} to = "/support">Support</Link>
          </li>
          <li>
            <Link className = "text-black " style = {{ textDecoration: 'none'}} href = "#"><i class="fa-solid fa-bars"></i></Link>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Navbar;