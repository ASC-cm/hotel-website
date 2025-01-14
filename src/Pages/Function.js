import React, { useState } from "react";
import Navbar from '../Components/Navbar';
import background from '../assets/function.webp';
import SearchBar from '../Components/Searchbar';
import Map from '../Components/Map';
import "../Stylesheet/Function.css"

function Function() {
  const [eventType, setEventType] = useState("");

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };
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
        <h2>Auckland Conference Room & Event Facilities</h2>
        <img 
        src={require("../assets/line2.png")}
        alt="desihn"
        width={50}
        height={50}
        />
        <p>Heartland Hotel Auckland Airport is located in the Airpark Business Centre only
           3km from the Auckland International and Domestic Airports. The hotel is also close
           to Villa Maria Winery, Rainbow’s End, Butterfly Creek, Treasure Island Mini-Golf, 
           and Ambury Farm.
        </p>
      </section>
      <div className="function-room-container">
        <h2>Function Room</h2>
      <div className="function-room-section">
        <img
         src={require('../assets/function pic 2.webp')} 
          alt="Function Room"
          className="function-room-image"
          width={200}
          height={150}
        />
        <div className="function-room-details">
          <h1 className="room-title">Catalina Room</h1>
          <p className="room-description">
            For Conferencing or Meetings, we offer a versatile function room
            plus delegates can choose from our comfortable, spacious, and
            affordable accommodation options. We offer a 24-hour free shuttle
            service to and from the airport.
          </p>
          <div className="room-capacity">
            <div className="capacity-item">
              <img src={require("../assets/dot icon.png")} alt="icon" width={20} height={20}/>
              <span className="capacity-label">Theatre</span>
              <p>70</p>
            </div>
            <div className="capacity-item">
              <img src={require("../assets/dot icon.png")} alt="icon" width={20} height={20}/>
              <span className="capacity-label">Classroom</span>
              <p>50</p>
            </div>
            <div className="capacity-item">
             <img src={require("../assets/dot icon.png")} alt="icon" width={20} height={20}/>
              <span className="capacity-label">Boardroom</span>
              <p>8</p>
            </div>
            <div className="capacity-item">
              <img src={require("../assets/dot icon.png")} alt="icon" width={20} height={20}/>
              <span className="capacity-label">Cocktail</span>
              <p>70</p>
            </div>
          </div>
          <hr class="divider" />
          <div className="capacity-item1">
              <img src={require("../assets/dot icon.png")} alt="icon" width={20} height={20}/>
              <span className="capacity-label">Banquet</span>
              <p>60</p>
            </div>
        </div>
      </div>

      {/* Find Out More Section */}
      <div className="find-out-more-section">
        <h2 className="section-title">Find out more</h2>
        <p>
          Find full pricing, delegate packages, catering options, and equipment
          hire information in our information packs:
        </p>
        <a href="/path/to/pdf" target="_blank" className="information-link">
          Conference & Event Information Pack (PDF)
        </a>
        <div className="request-quote">
          <button className="quote-button">REQUEST A QUOTE</button>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="enquiry-form-section">
        <h2 className="section-title">Make a Quick Enquiry</h2>

        {/* Contact Details */}
        <h3 className="subsection-title1">Contact Details</h3>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>
                NAME
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  className="form-input"
                />
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                className="form-input"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                PHONE
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                COMPANY/ORGANISATION
                <input
                  type="text"
                  name="company"
                  className="form-input"
                />
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>
              EMAIL
              <input
                type="email"
                name="email"
                className="form-input"
              />
            </label>
          </div>

          {/* About Your Event */}
          <h3 className="subsection-title">About Your Event</h3>
          <div className="event-grid">
            <div className="form-group">
              <label>
                DATE OF THE EVENT
                <input
                  type="date"
                  name="eventDate"
                  className="form-input"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  HOW MANY GUESTS?
                  <input
                    type="number"
                    name="guestCount"
                    className="form-input"
                  />
                </label>
              </div>
              <div className="form-group">
              <label>
                EVENT TYPE
                <select
                  name="eventType"
                  value={eventType}
                  onChange={handleEventTypeChange}
                  className="form-select"
                >
                  <option value="" disabled>
                    Conference
                  </option>
                  <option value="conference">Conference</option>
                  <option value="meeting">Meeting</option>
                  <option value="seminar">Seminar</option>
                  <option value="training">Training</option>
                  <option value="exhibition">Exhibition</option>
                  <option value="function">Function</option>
                  <option value="banquet">Banquet</option>
                  <option value="wedding">Wedding</option>
                  <option value="others">Others</option>
                </select>
              </label>
            </div>
          </div>

            <div className="form-group">
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    < Map/>
    </div>
  );
}

export default Function;