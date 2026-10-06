import React from "react";

function Footer() {
  return (
    <>
    <div className = "flex justify-between items-start text-left mx-30 my-20">
      <div>
        <img src = "media/images/logo.svg" alt = "logo" className = "w-35 py-3"/>
        <p>2010 - 2023 Zerodha Technologies Pvt Ltd.<br/>All rights reserved.</p>

        <div className="flex">
          <p className="text-lg mx-1">
             <i class="fa-brands fa-facebook-f"></i>

          </p>
          <p className="text-lg mx-1">
            <i class="fa-brands fa-twitter"></i>

          </p>
          <p className="text-lg mx-1">
            <i class="fa-brands fa-linkedin-in"></i>

          </p>
          <p className="text-lg mx-1">
            <i class="fa-brands fa-youtube"></i>

          </p>
          <p className="text-lg mx-1">
            <i class="fa-brands fa-instagram"></i>

          </p>
          
          
          

        </div>
      </div>

      <div>
        <h3>Company</h3>
        <p>About</p>
        <p>Products</p>
        <p>Pricing</p>
        <p>Referral Programs</p>
        <p>Careers</p>
        <p>Zerodha tech</p>
        <p>Press & Media</p>
        <p>Zerodha cares (CSR)</p>
      </div>

      <div>
        <h3>Support</h3>
        <p>Contact</p>
        <p>Support Portal</p>
        <p>Z-Connect blog</p>
        <p>List of charges</p>
        <p>Downloads & resources</p>
      </div>
      <div>
        <h3>Account</h3>
        <p>Open an account</p>
        <p>Fund your account</p>
        <p>Fund transfer</p>
        <p>60 days challenge</p>
      </div>

      
    </div>
    <p className = "mx-30  text-m">
      Zerodha Broking Ltd. is a member of NSE and BSE and is registered with SEBI under Registration No. INZ000031633. Zerodha Commodities Pvt. Ltd. is a member of MCX with Member Code 46025 and SEBI Registration No. INZ000038238. The registered office is located at #153/154, 4th Cross, J.P. Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
       For any complaints related to securities broking, investors can contact Zerodha at complaints@zerodha.com. Investors can also file complaints through the SEBI SCORES portal by registering and providing the required information, such as name, PAN, address, mobile number, and other relevant details.<br/><br/>
I      Investments in the securities market are subject to market risks. Investors should carefully read all related documents, terms, conditions, and risk disclosures before making any investment decisions.<br/><br/>
       To prevent unauthorized transactions, investors should keep their mobile number and email address updated with their stockbroker. Transaction notifications and account statements should be reviewed regularly to ensure the security of the account.<br/><br/>
     </p>
    </>
  );
}

export default Footer;