import React, { useState, useReducer, useEffect } from "react";

import BookingForm from "../components/BookingForm";

const initializeTimes = () => {
  return ["18:00", "19:00", "20:00"];
};

const updateTimes = (state, action) => {
  return ["18:00", "19:00", "20:00", "21:00"];
};

const BookingPage = () => {
  const [date, setDate] = useState(undefined);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
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
      />
    </section>
  );
};

export default BookingPage;
