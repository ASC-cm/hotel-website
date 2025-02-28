import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/Check.css";
import DatePicker from "react-datepicker";
import Navbar from "../Components/Navbar";
import "react-datepicker/dist/react-datepicker.css";

// Sample Data for states and local governments
const nigerianStates = {
  Lagos: ["Ikeja", "Victoria Island", "Badagry"],
  Abuja: ["Abuja Municipal", "Kuje", "Bwari"],
  Kano: ["Kano Municipal", "Tudun Wada", "Nasarawa"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme"],
  Ogun: ["Abeokuta North", "Ijebu Ode", "Sagamu"],
  Abia: ["Aba North", "Aba North", "Arochukwu", "Bende"],
  AkwaIbom: ["Abak", "Uyo", "Eastern Obolo", "Eket"],
  Anambra: ["Aguata", "Awka North", "Awka South", "Anambra East"],
  CrossRiver: ["Abi", "Calabar", "Akamkpa", "Akpabuyo", "Bakassi"],
  // Add other states and their local governments here
};

function Check() {
  const [selectedState, setSelectedState] = useState("");
  const [localGovernments, setLocalGovernments] = useState([]);
  const [selectedLocalGovt, setSelectedLocalGovt] = useState("");

  // Date Picker state
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // Rooms & Guests state
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isEditingGuests, setIsEditingGuests] = useState(false);

  const [isStateDropdownVisible, setIsStateDropdownVisible] = useState(false);
  const [isLocalGovtDropdownVisible, setIsLocalGovtDropdownVisible] =
    useState(false);

  const stateDropdownRef = useRef(null);
  const localGovtDropdownRef = useRef(null);
  const guestsDropdownRef = useRef(null); // To handle "Rooms & Guests"

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        stateDropdownRef.current &&
        !stateDropdownRef.current.contains(event.target)
      ) {
        setIsStateDropdownVisible(false);
      }
      if (
        localGovtDropdownRef.current &&
        !localGovtDropdownRef.current.contains(event.target)
      ) {
        setIsLocalGovtDropdownVisible(false);
      }
      if (
        guestsDropdownRef.current &&
        !guestsDropdownRef.current.contains(event.target)
      ) {
        setIsEditingGuests(false); // Hide rooms & guests dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle state change
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setLocalGovernments(nigerianStates[state] || []);
    setSelectedLocalGovt("");
    setIsStateDropdownVisible(false);
    setIsLocalGovtDropdownVisible(true); // Show local governments after state is selected
  };

  // Handle local government change
  const handleLocalGovtChange = (e) => {
    setSelectedLocalGovt(e.target.value);
    setIsLocalGovtDropdownVisible(false); // Hide local govt dropdown after selection
  };

  // Handle Rooms & Guests change
  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  // Handle check-in date change
  const handleCheckInDateChange = (date) => setCheckInDate(date);

  // Handle check-out date change
  const handleCheckOutDateChange = (date) => setCheckOutDate(date);

  // Handle Room and Guest click behavior
  const handleRoomsAndGuestsClick = () => {
    setIsEditingGuests(!isEditingGuests); // Toggle visibility of rooms & guests editing container
  };

  // Handle search button click
   const navigate = useNavigate();

   const handleClick = () => {
     navigate("/Booking");
   };

  return (
    <>
      <Navbar />
      <div className="search-bar1">
        <div className="search-field1">
          <label>Hotel</label>
          <div
            className="hotel-input"
            onClick={() => setIsStateDropdownVisible(true)}
          >
            <input
              type="text"
              placeholder="Where to?"
              value={
                selectedState && selectedLocalGovt
                  ? `${selectedState}, ${selectedLocalGovt}`
                  : "Select a state and local government"
              }
              readOnly
            />
            {isStateDropdownVisible && (
              <div ref={stateDropdownRef} className="dropdown-container">
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="state-dropdown"
                >
                  <option value="">Select a State</option>
                  {Object.keys(nigerianStates).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Only display Local Government input if a state is selected */}
        {selectedState && !selectedLocalGovt && (
          <div className="search-field1">
            <label>Local Government</label>
            <div
              className="local-govt-input"
              onClick={() => setIsLocalGovtDropdownVisible(true)}
            >
              <input
                type="text"
                placeholder="Select Local Government"
                value={selectedLocalGovt || "Select a Local Government"}
                readOnly
              />
              {isLocalGovtDropdownVisible && (
                <div ref={localGovtDropdownRef} className="dropdown-container1">
                  <select
                    value={selectedLocalGovt}
                    onChange={handleLocalGovtChange}
                    className="local-govt-dropdown"
                  >
                    <option value="">Select a Local Government</option>
                    {localGovernments.map((lg) => (
                      <option key={lg} value={lg}>
                        {lg}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="search-field1">
          <label>Check-in & Check-out</label>
          <div className="date-picker-container1">
            <div className="check-in-date1">
              <label>Check-in</label>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                placeholderText="Select Check-in Date"
                dateFormat="yyyy/MM/dd"
                className="date-input1"
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
              />
            </div>
            <div className="check-out-date1">
              <label>Check-out</label>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                placeholderText="Select Check-out Date"
                dateFormat="yyyy/MM/dd"
                className="date-input1"
                selectsEnd
                startDate={checkInDate}
                minDate={checkInDate}
              />
            </div>
          </div>
        </div>

        <div className="search-field1" onClick={handleRoomsAndGuestsClick}>
          <label>Rooms & Guests</label>
          <input
            type="text"
            placeholder="Rooms & Guests"
            value={`${rooms} room${rooms > 1 ? "s" : ""}, ${adults} adult${
              adults > 1 ? "s" : ""
            }, ${children} child${children > 1 ? "ren" : ""}`}
            readOnly
          />
          {isEditingGuests && (
            <div ref={guestsDropdownRef} className="rooms-guests-container1">
              <div className="rooms-container1">
                <span>Rooms: {rooms}</span>
                <button onClick={() => increment(setRooms, rooms)}>+</button>
                <button onClick={() => decrement(setRooms, rooms)}>-</button>
              </div>
              <div className="adults-container1">
                <span>Adults: {adults}</span>
                <button onClick={() => increment(setAdults, adults)}>+</button>
                <button onClick={() => decrement(setAdults, adults)}>-</button>
              </div>
              <div className="children-container1">
                <span>Children: {children}</span>
                <button onClick={() => increment(setChildren, children)}>
                  +
                </button>
                <button onClick={() => decrement(setChildren, children)}>
                  -
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Existing Button for Larger Screens */}
        <button className="search-button1" onClick={handleClick}>
          Check Availability
        </button>
      </div>
    </>
  );
}

export default Check;
