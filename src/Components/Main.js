import React, { useRef } from 'react';
import '../Stylesheet/Main.css';
import Map from './Map';

const hotels = [
  { id: 1, image: require('../assets/hotel1.jpeg'), name: 'Hotel 1' },
  { id: 2, image: require('../assets/hotel2.jpeg'), name: 'Hotel 2' },
  { id: 3, image: require('../assets/hotel3.jpeg'), name: 'Hotel 3' },
  { id: 4, image: require('../assets/hotel4.jpeg'), name: 'Hotel 4' },
  { id: 5, image: require('../assets/hotel5.jpeg'), name: 'Hotel 5' },
  { id: 6, image: require('../assets/hotel6.jpeg'), name: 'Hotel 6' },
  { id: 7, image: require('../assets/hotel7.jpeg'), name: 'Hotel 7' },
  { id: 8, image: require('../assets/hotel8.jpeg'), name: 'Hotel 8' },
 
];

const Main = () => {
  const galleryRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="hotels-container">
      {/* Section 1: Introduction */}
      <section className="intro-section">
        <h1>New Zealand Hotels & Accommodation</h1>
        <hr />
        <p className='new'>
          For over forty years, New Zealand owned and operated Scenic Hotel Group
          have led the way in caring for visitors from around the country and
          the world. We offer a warm welcome and pride ourselves in showcasing
          true Kiwi hospitality to locals near and far.
        </p>
        <p>
          Part of this uniquely New Zealand hospitality experience is connecting
          guests with people, property and place, which includes many of
          Aotearoa’s most treasured environments and communities. From Northland
          to the deep south, and into our South Pacific playground, Scenic Hotel
          Group are located in some of the world’s most unique and picturesque
          destinations.
        </p>
        <p>
          Whether you are travelling for business or pleasure; solo, family or
          in a large group; we promise quality, comfort and peace of mind. Scenic
          Hotel Group... travelling with you.
        </p>
      </section>

      {/* Section 2: Discover Our Hotels */}
      <section className="discover-section">
        <div className='discover'>
          <h2>Discover our Hotels</h2>
          <div className="navigation-arrows">
            <button className="arrow left" onClick={scrollLeft}>&larr;</button>
            <button className="arrow right" onClick={scrollRight}>&rarr;</button>
          </div>
        </div>
        <div className="hotels-gallery" ref={galleryRef}>
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} />
            </div>
          ))}
        </div>
      </section>
      <section className='location-section'>
        <h2>Our Locations</h2>
        <p>With 13 fantastic locations around New Zealand and the South Pacific, 
          we’ve got something for everyone. From Glacier Country getaways, adrenalin
          charged adventure in Queenstown, food and wine forays in the Hawkes Bay or 
          Marlborough, culture and history in the Bay of Islands, city escapes in New
          Zealand’s major centres or a Pacific paradise adventure in Niue.
        </p>
      </section>
      <Map />
      <section className='scenic-collection'>
        <h2>The Scenic Collection</h2>
        <p>Offering a variety of accommodation (rooms, suites and self-catering apartments) 
          at Heartland Hotels, Scenic Hotels, Suites & Resorts, and our Legacy Collection 
          properties – Airedale Boutique Suites and Te Waonui Forest Retreat, as well as
           excellent event services such as conference and meeting facilities, and wedding venues.
        </p>
        <button>OUR COLLECTION</button>
      </section>
      <section>
        <div className="shg-advantage">
          <div className="shg-image">
          <img src={require('../assets/me.jpg')} alt="person" />
          </div>
          <div className="shg-content">
            <h4>Business Traveller Discounts</h4>
            <h2>SHG Advantage</h2>
            <h3>For Kiwis Who Sleep Away on the Job</h3>
            <p>
              If your job calls for you to travel, whether it be multiple times a week
              or only once or twice a year, the Scenic Hotel Group is here to help
              give your business the advantage. Our new SHG Advantage programme gives
              you easy access to instant rewards, additional discounts, and VIP
              benefits, deals, and promotions at all our hotels around New Zealand.
            </p>
            <a href="#find-out-more" className="find-out-more">
              Find Out More →
            </a>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Main;
