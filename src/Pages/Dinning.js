import Navbar from "../Components/Navbar"
import SearchBar from "../Components/Searchbar";
import background from '../assets/dinning.webp';
import { useNavigate } from "react-router-dom";
import "../Stylesheet/Function.css"
import "../Stylesheet/Dinning.css"


const restaurants = [
    {
      name: "Nikau Restaurant & Bar",
      location: "Paihia",
      image: require("../assets/re1.webp"),
    },
    {
      name: "Trocadero Restaurant & Bar",
      location: "Auckland CBD",
      image: require("../assets/re2.webp"),
    },
    {
      name: "Runway Restaurant & Bar",
      location: "Auckland Airport",
      image: require("../assets/re3.webp"),
    },
  ];

const Dinning = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/Dine");
    };
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
            <div className="function-room-container">
                <h2>Find a Restaurant</h2>
            </div>
            <div className="restaurant-container">
                {restaurants.map((restaurant, index) => (
                    <div className="restaurant-card" key={index}>
                        <img src={restaurant.image} alt={restaurant.name} />
                        <div className="overlay">
                            <h2>{restaurant.name}</h2>
                            <p>({restaurant.location})</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="restaurant-detail">
                <div className="image-section">
                    <img
                        src={require("../assets/re food.webp")}
                        alt="Dolphin Restaurant & Bar"
                    />
                </div>
                <div className="text-section">
                    <h1>Dolphin Restaurant & Bar (Niue)</h1>
                    <p>
                        Located at Scenic Matavai Resort Niue, the Dolphin Restaurant & Bar
                        offers guests and visitors a mix of traditional Niuean and European
                        cuisine with stunning clifftop views. With stunning clifftop views
                        you’ll be amazed to be able to spot sea-life right from your table,
                        and if you’re dining between June and October you might even spot a
                        whale!
                    </p>
                    <button onClick={handleClick} className="cta-button">
                        Dolphin Restaurant And Bar <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dinning;