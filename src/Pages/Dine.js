import Navbar from "../Components/Navbar"
import SearchBar from "../Components/Searchbar";
import background from '../assets/dinning.webp';
import Footer from "./Footer";
import "../Stylesheet/Function.css";
import "../Stylesheet/Dine.css";



const Dine = () => {
    return (
        <div>
            <Navbar />
            <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay1" />
            </div>
            <SearchBar />
            <section className='location-section1'>
                <h2>Explore Scenic Hotel Group’s Restaurants & Bars</h2>
                <img 
                    src={require("../assets/line2.png")}
                    alt="desihn"
                    width={50}
                    height={50}
                />
                <p>
                    Located in many popular regions in New Zealand as well as the South Pacific country of Niue, 
                    Scenic Hotel Group brings you quality restaurants and bars alongside our hotels. Selecting 
                    from the freshest local produce is our goal, and our commitment is to offer you a genuine 
                    sense of Kiwi hospitality and service.
                </p>
            </section>
            <div className="menu-container">
                <h1 className="menu-title">Menus</h1>
                <div className="menu-content">
                    <div className="menu-sidebar">
                        <ul>
                            <li className="active">Breakfast Menu</li>
                            <li>Kai Aho – Lunch Menu</li>
                            <li>Kai Fiafia Dinner</li>
                            <li>Kids All Day Menu</li>
                        </ul>
                    </div>
                    <div className="menu-details">
                        <h2 className="menu-header">Breakfast Menu</h2>
                        <p className="menu-subtitle">Available from 7am – 10am</p>
                        <div className="menu-item">
                            <h3>Tropical Continental Breakfast (Buffet)</h3>
                            <p>
                                Cereals, yoghurt, juice, local seasonal fruits, pastries and bread 
                                selection
                            </p>
                            <span className="price">$24.00</span>
                        </div>
                        <hr />
                        <div className="menu-item">
                            <h3>Eggs on Toast</h3>
                            <p>Scrambled, poached or fried</p>
                            <span className="price">$14.00</span>
                        </div>
                        <hr />
                        <div className="menu-item">
                            <h3>Bacon & Eggs</h3>
                            <p>Two eggs, with crispy bacon served with toast</p>
                            <span className="price">$20.00</span>
                        </div>
                        <hr />
                        <div className="menu-item">
                            <h3>Eggs Benedict</h3>
                            <span className="price">$25.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dine;