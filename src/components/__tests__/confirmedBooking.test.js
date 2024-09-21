import { render, screen } from "@testing-library/react";
import BookingForm from "../../components/BookingForm";
import { submitAPI } from "../../utils/api";

describe("BookingForm HTML5 Validation", () => {
  const mockProps = {
    handleSubmit: jest.fn(),
    date: "",
    handleDateChange: jest.fn(),
    time: "",
    setTime: jest.fn(),
    guests: 1,
    setGuests: jest.fn(),
    occasion: "Birthday",
    setOccasion: jest.fn(),
    availableTimes: ["18:00", "19:00"],
    name: "",
    setName: jest.fn(),
  };

  test('should apply "required" attribute to Name input', () => {
    render(<BookingForm {...mockProps} />);
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeRequired();
  });

  test('should apply "required" attribute to Date input', () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test('should apply "min" and "max" attributes to Guests input', () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});

describe("BookingForm JavaScript Validation", () => {
  test("submitAPI returns true", () => {
    const formData = {
      date: "2024-09-21",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
