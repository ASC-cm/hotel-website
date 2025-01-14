import Navbar from '../Components/Navbar';
import background from '../assets/rom.webp';
import SearchBar from '../Components/Searchbar';
import Roomc from "../Pages/Roomc";
import "../Stylesheet/Function.css";
import "../Stylesheet/Room.css";
import "../Stylesheet/Family.css";

const Family = () => {
    const features = [
        { name: "Free Hi-speed Wi-Fi", icon: require("../assets/icons/wifi.png") },
        { name: "TV with Sky Channels", icon: require("../assets/icons/tv.png") },
        { name: "Air Conditioning / Heating", icon: require("../assets/icons/airco.png") },
        { name: "Balcony/Patio", icon: require("../assets/icons/bogalow.png") },
        { name: "Mini Fridge", icon: require("../assets/icons/fridge.png") },
        { name: "Desk", icon: require("../assets/icons/desk.png") },
        { name: "Telephone", icon: require("../assets/icons/tele.png") },
        { name: "Hairdryer", icon: require("../assets/icons/hair_dryer.png") },
        { name: "Ironing Facilities", icon: require("../assets/icons/iron.png") },
        { name: "Complimentary Toiletries", icon: require("../assets/icons/toileries.png") },
        { name: "Tea and Coffee Facilities", icon: require("../assets/icons/tea.png") },
        {
            name: "Bedding Configuration: Queen, King, or Queen & King",
            icon: require("../assets/icons/tv.png")
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay1">
                    <h1>Win this Summer</h1>
                    <p>Share your summer snaps for your chance to win, find out more</p>
                </div>
            </div>
            <SearchBar />
            <div className="details-container">
                <h2>Family Room</h2>
                <hr />
                <p>
                Family rooms are ideal for those travelling in a small group or with children. 
                The room has a separate bedroom with 2 single beds and a comfy queen bed in the 
                living room. All rooms include air conditioning, TV with Sky channels, mini fridge, 
                tea and coffee making facilities and free WiFi. The en-suite bathroom comes with a h
                airdryer and complimentary toiletries.
                </p>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <div className="feature-row" key={index}>
                            <span>{feature.name}</span>
                            <img src={feature.icon} alt={feature.name} />
                        </div>
                    ))}
                </div>
            </div>
            <Roomc />
        </div>
    );
};

export default Family;
