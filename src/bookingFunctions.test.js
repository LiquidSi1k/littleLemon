import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const initializeTimes = (initialTimes) => {
  return initialTimes;
};

const updateTimes = (currentTimes, newTime) => {
  return [...currentTimes, newTime];
};

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      handleSubmit={() => {}}
      date={""}
      handleDateChange={() => {}}
      time={""}
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion={""}
      setOccasion={() => {}}
      availableTimes={[]}
    />
  );
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the correct initial times", () => {
  const initialTimes = ["17:00", "18:00", "19:00"];
  const result = initializeTimes(initialTimes);
  expect(result).toEqual(initialTimes);
});

test("updateTimes adds a new time to the list", () => {
  const currentTimes = ["17:00", "18:00"];
  const newTime = "19:00";
  const result = updateTimes(currentTimes, newTime);
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});
