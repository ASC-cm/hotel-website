import React from "react";
import "../Stylesheet/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-signup">
        <h3>Sign up to Scenic News</h3>
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
            <li>Explore Regions</li>
            <li>Special Offers</li>
            <li>Restaurants & Bars</li>
            <li>Gift Shop & Vouchers</li>
          </ul>
        </div>
        <div className="column">
          <h4>OUR COLLECTION</h4>
          <ul>
            <li>Heartland Hotels</li>
            <li>Scenic Hotels</li>
            <li>Legacy Collection</li>
            <li>Pet Friendly Hotels</li>
          </ul>
        </div>
        <div className="column">
          <h4>FUNCTIONS</h4>
          <ul>
            <li>Conferences</li>
            <li>Weddings</li>
            <li>Special Events</li>
            <li>Rewards</li>
          </ul>
        </div>
        <div className="column">
          <h4>OUR STORY</h4>
          <ul>
            <li>News</li>
            <li>Your Career</li>
            <li>Sustainability</li>
            <li>Home Grown</li>
            <li>Partnerships</li>
          </ul>
        </div>
        <div className="column">
          <h4>BOOK DIRECT</h4>
          <ul>
            <li>Book with Confidence</li>
            <li>Business Travel</li>
            <li>SuperGold Members</li>
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
          <a href="#facebook">f</a>
          <a href="#instagram">i</a>
          <a href="#linkedin">l</a>
        </div>
        <div className="footer-info">
          <p>
            SCENIC HOTEL GROUP<br />
            New Zealand Owned & Operated
          </p>
          <div className="logos">
            <span>Legacy Collection</span>
            <span>Scenic Hotels</span>
            <span>Heartland Hotels</span>
          </div>
        </div>
        <div className="footer-contact">
          <p>
            Need Help with Reservations?<br />
            P. 0800 69 69 63 or +64 3 357 1919<br />
            <a href="/contact">Contact Us</a>
          </p>
        </div>
        <div className="copyright">
          &copy; Scenic Hotel Group 2025. Designed and Developed by{" "}
          <a href="https://www.publica.com">Publica</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
