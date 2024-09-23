import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const { date, time, guests, occasion, name, email } = location.state || {};
  const navigate = useNavigate();

  return (
    <section className="center-all">
      <div
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <h2>Your booking has been confirmed!</h2>
        <p>Here are your booking details:</p>
        <ul className="list-none">
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Date:</strong> {date}
          </li>
          <li>
            <strong>Time:</strong> {time}
          </li>
          <li>
            <strong>Guests:</strong> {guests}
          </li>
          <li>
            <strong>Occasion:</strong> {occasion}
          </li>
        </ul>
        <Button onClick={() => navigate("/")}>Done</Button>
      </div>
    </section>
  );
};

export default ConfirmationPage;
