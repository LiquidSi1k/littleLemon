import React, { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../utils/api";

import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "dateChange":
      const newDate = new Date(action.payload);
      return fetchAPI(newDate);
    default:
      return state;
  }
};

const BookingPage = () => {
  const [date, setDate] = useState(undefined);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const [time, setTime] = useState(availableTimes[0] || "18:00");

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  const handleDateChange = (e) => {
    if (e.target) {
      setDate(e.target.value);
      dispatch({ type: "dateChange", payload: e.target.value });
    }
  };

  const handleSubmit = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed", { state: formData });
    } else {
      alert("Failed to submit reservation");
    }
  };

  return (
    <section className="center-all">
      <BookingForm
        handleSubmit={handleSubmit}
        date={date}
        handleDateChange={handleDateChange}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
    </section>
  );
};

export default BookingPage;
