import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import background from '../assets/family.webp';
import SearchBar from '../Components/Searchbar';
import Roomc from "../Pages/Roomc";
import "../Stylesheet/Function.css";
import "../Stylesheet/Room.css";
import "../Stylesheet/Family.css";
import "../Stylesheet/Superior.css";

const images = [
    require("../assets/family.webp"),
    require("../assets/family1.webp"),
    require("../assets/family2.webp"),
    require("../assets/family4.webp"),
];

const Family = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
        useEffect(() => {
            const interval = setInterval(() => {
                nextImage();
            }, 3000);
            return () => clearInterval(interval);
        }, [currentIndex]);
    
        const nextImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
    
        const prevImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };
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
                <div className="hero-overlay1" />
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
                <div className="slider-container">
                    <button className="arrow left-arrow" onClick={prevImage}>
                        &#8592;
                    </button>
                    <div className="slider" style={{ display: 'flex', transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                style={{ minWidth: '100%' }}
                            />
                        ))}
                    </div>
                    <button className="arrow right-arrow" onClick={nextImage}>
                        &#8594;
                    </button>
                </div>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <div className="feature-row" key={index}>
                            <span>{feature.name}</span>
                            <img src={feature.icon} alt={feature.name} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='let-check'>
                <h1>How to book a Family Room</h1>
                <h4>Family rooms are located close to the pool and other hotel facilities. 
                    Rollaway beds and Cots are available on request (please arrange with 
                    the hotel prior to arrival to ensure we’re able to arrange).
                </h4>
                <button className='check-button'>Check Availabilty</button>
            </div>
            <Roomc />
        </div>
    );
};

export default Family;
