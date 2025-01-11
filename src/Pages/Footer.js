import React from "react";

const Footer = () => {
    return (
        <div>
            <footer>
              <div className="footer">
              <div className="footer-container">
        <h2>HELP & INFORMATION</h2>
        <a href="./Contact">Help</a>
        <a href="./Contact">Check programs offer</a>
        <a href="./Contact">Duration of courses</a>
        <a href="./Contact">FAQ</a>
      </div>
      <div className="footer-container">
        <h2>ABOUT Asdin</h2>
        <a href="./About">About us</a>
        <a href="./About">Careers at Asdin</a>
        <a href="./About">Self responsibility</a>
        <a href="./About">Investors' site</a>
      </div>
      <div className="footer-container">
        <h2>MORE FROM US</h2>
        <a href="./Developer Incubator">Mobile & Asdin App</a>
        <a href="./Developer Incubator">Discount</a>
        <a href="./Developer Incubator">Gift vouchers</a>
        <a href="./Developer Incubator">Discover Asdin program credit-card</a>
        <a href="./Developer Incubator">Asdin x thrift+</a>
      </div>
      <div className="footer-container">
        <h2>JOINING FROM:</h2>
        <p>You're in <span class="country">Nigeria <img src="images/nigeria.png" alt="Flag 1" width="15" height="10"></img></span>   | <a href="./">Change</a></p>
        <p>Some of our international sites:</p>
        <div className="flags">
          <img src="images/algeria.png" alt="Flag 1" width="200" height="200"></img>
          <img src="images/angola.png" alt="Flag 1" width="200" height="200"></img>
          <img src="images/canada.png" alt="Flag 1" width="200" height="200"></img>
          <img src="images/france.png" alt="Flag 1" width="200" height="200"></img>
          <img src="images/ghana.png" alt="Flag 1" width="200" height="200"></img>
          <img src="images/uk.png" alt="Flag 1" width="200" height="200"></img>
        </div>
      </div>
              </div>
            </footer>
        </div>
    );
  };
  
  export default Footer;