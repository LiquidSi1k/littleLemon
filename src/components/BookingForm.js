import React from "react";
import Button from "./ui/Button";

const BookingForm = ({
  handleSubmit,
  date,
  handleDateChange,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  name,
  setName,
  email,
  setEmail,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion, name, email };
    handleSubmit(formData);
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <h2>Booking Form</h2>
      <label htmlFor="guest-name">Name</label>
      <input
        type="text"
        id="guest-name"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="guest-email">Email</label>
      <input
        type="email"
        id="guest-email"
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date || ""}
        onChange={(e) => handleDateChange(e)}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests" required>
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
        aria-required="true"
        aria-describedby="guests-description"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Personal">Personal</option>
      </select>

      <Button
        type="submit"
        disabled={!date || !time || guests < 1 || guests > 10}
        aria-label="Make your reservation"
      >
        Make Your reservation
      </Button>
    </form>
  );
};

export default BookingForm;
