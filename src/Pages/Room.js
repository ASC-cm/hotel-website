import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import background from '../assets/rom.webp';
import SearchBar from '../Components/Searchbar';
import "../Stylesheet/Function.css"
import "../Stylesheet/Room.css"


function Room() {
  const navigate = useNavigate();
  const rooms = [
    {
      title: "Standard Rooms",
      description:
        "Standard Studio Rooms are available with a King Bed, Queen and Single bed, or two Queen beds sleeping up to 4 guests. An en-suite bathroom comes with a shower over bath (accessible bathroom available on request).",
      image:  require("../assets/standard room.webp"),
      size: "26m²",
      capacity: "1-4",
      path: "/standard-room",
    },
    {
      title: "Superior Rooms",
      description:
        "Superior Rooms offer guests extra space and are available with a King bed, Queen and Single bed, or two Queen beds sleeping up to 4 guests. En-suite bathroom comes with a shower over bath.",
      image:  require("../assets/superior room.webp"),
      size: "30m²",
      capacity: "1-4",
      path: "/superior-room",
    },
    {
      title: "Family Room",
      description:
        "Deluxe Rooms provide luxury with a King bed and private en-suite bathroom. Ideal for a comfortable and relaxing stay.",
      image:  require("../assets/superior plus.webp"),
      size: "35m²",
      capacity: "1-3",
      path: "/family-room",
    },
    {
      title: "One Bedroom Suites",
      description:
        "Family Rooms accommodate larger groups with two Queen beds and a spacious en-suite bathroom, sleeping up to 5 guests.",
      image:  require("../assets/room.webp"),
      size: "40m²",
      capacity: "1-5",
      path: "/one-bedroom-suite",
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
      <section className='location-section1'>
        <h2>Heartland Hotel Auckland Airport Rooms</h2>
        <img 
        src={require("../assets/line2.png")}
        alt="desihn"
        width={50}
        height={50}
        />
        <p>Experience comfort at our Heartland Hotel in Auckland. Your ideal Auckland Airport ccommodation. 
           Our rooms are meticulously designed to provide guests with a rejuvenating and tranquil experience, 
           whether arriving or departing. Each room is equipped with essential amenities, including air 
           conditioning, a TV with Sky channels, a mini fridge, tea and coffee-making facilities, and complimentary 
           WiFi. The en-suite bathroom is thoughtfully appointed with a hairdryer and complimentary toiletries. For 
           extended stays or family trips, our one-bedroom suites offer additional conveniences, featuring cooking 
           facilities and a dedicated dining area. Choose us for a seamless blend of relaxation and practicality 
           during your time in Auckland.
        </p>
      </section>
      <div className="container">
        {rooms.map((room, index) => (
          <div  className="card"
          key={index}
          onClick={() => navigate(room.path)}>
            <img src={room.image} alt={room.title} className="image" />
            <h3>{room.title}</h3>
            <div className="info">
              <span>{room.size}</span>
              <span>🛏️ {room.capacity}</span>
            </div>
           <p>{room.description}</p>
            <button className="button">See More</button>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Room;