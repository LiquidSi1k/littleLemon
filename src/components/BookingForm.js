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
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <h2>Booking Form</h2>
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
        onChange={(e) => setGuests(e.target.value)}
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
      </select>

      <Button type="submit">Make Your reservation</Button>
    </form>
  );
};

export default BookingForm;
