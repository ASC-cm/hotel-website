import Navbar from '../Components/Navbar';
import background from '../assets/hotel rom.jpeg';
import SearchBar from '../Components/Searchbar';
import "../Stylesheet/Function.css"

function Room() {
  
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
    </div>
    )
}

export default Room;