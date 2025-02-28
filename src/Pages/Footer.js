import React, { useState } from "react";
import "../Stylesheet/Footer.css"; 
import { Link } from "react-router-dom";

const Footer = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <footer className="footer">
      <div className="footer-signup">
        <h3>Sign up to Heaven News</h3>
        <form className="signup-form">
          <div className="form-group">
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
          </div>
          <input type="email" placeholder="Email *" />
          <div className="form-group-checkbox">
            <input type="checkbox" id="accept-policy" />
            <label htmlFor="accept-policy">
              By submitting this form, you accept our{" "}
              <a href="/privacy-policy">privacy policy</a>.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="footer-links">
        <div className="column">
          <h4>HOTELS</h4>
          <ul>
            <li>
              <a href="/Offer">Explore Regions</a>
            </li>
            <li>
              <a href="/Offer">Special Offers</a>
            </li>
            <li>
              <a href="/Dinning">Restaurants & Bars</a>
            </li>
            <li>
              <a href="/Dinning">Gift Shop & Vouchers</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>OUR COLLECTION</h4>
          <ul>
            <li>Heartland Hotels</li>
            <li>Heaven Hotels</li>
            <li>Legacy Collection</li>
            <li>Pet Friendly Hotels</li>
          </ul>
        </div>
        <div className="column">
          <h4>FUNCTIONS</h4>
          <ul>
            <li>
              <Link to="/Function" onClick={toggleMenu}>
                Functions
              </Link>
            </li>
            <li>
              <Link to="/Function" onClick={toggleMenu}>
                Weddings
              </Link>
            </li>
            <li>
              <Link to="/Function" onClick={toggleMenu}>
                Special Events
              </Link>
            </li>
            <li>
              <Link to="/Function" onClick={toggleMenu}>
                Rewards
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>OUR STORY</h4>
          <ul>
            <li>
              <Link to="/Story" onClick={toggleMenu}>
                News
              </Link>
            </li>
            <li>
              <Link to="/Story" onClick={toggleMenu}>
                Your Career
              </Link>
            </li>
            <li>
              <Link to="/Story" onClick={toggleMenu}>
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/Story" onClick={toggleMenu}>
                Home Grown
              </Link>
            </li>
            <li>
              <Link to="/Story" onClick={toggleMenu}>
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>BOOK DIRECT</h4>
          <ul>
            <li>
              <a href="/Check">Book with Confidence</a>
            </li>
            <li>
              <a href="/Check">Business Travel</a>
            </li>
            <li>
              <a href="/Function">Business Travel</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-conditions">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#facebook">
            <img
              src={require("../assets/icons/facebook.png")}
              alt="facebook"
              style={{ width: "30px", height: "auto" }}
            />
          </a>
          <a href="#instagram">
            <img
              src={require("../assets/icons/insta.png")}
              alt="facebook"
              style={{ width: "30px", height: "auto" }}
            />
          </a>
          <a href="#linkedin">
            <img
              src={require("../assets/icons/linked.png")}
              alt="facebook"
              style={{ width: "30px", height: "auto" }}
            />
          </a>
        </div>
        <div className="footer-info">
          <p>
            HEAVEN HOTEL GROUP
            <br />
            God Almighty Owned & Operated
          </p>
          <div className="logos">
            <span>Legacy Collection</span>
            <span>Heaven Hotels</span>
            <span>Heartland Hotels</span>
          </div>
        </div>
        <div className="footer-contact">
          <p>
            Need Help with Reservations?
            <br />
            P. 0800 634 69 6 or +64 3 37 1919
            <br />
            <a href="./Contact">Contact Us</a>
          </p>
        </div>
        <div className="copyright">
          &copy; Heaven Hotel Group 2025. Designed and Developed by{" "}
          <a href="https://portfolio-gamma-ten-75.vercel.app/">ASC-cm</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
