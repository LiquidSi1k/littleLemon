import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants/assets";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex">
        <div className="footer-tags">
          <Link to={"/"} className="list-none">
            <img src={logo} height={40} width={40} alt="logo" />
          </Link>
          <div>
            <p>Home</p>
            <p>Order Online</p>
            <p>Reservation</p>
          </div>
          <div>
            <p>Contact</p>
            <p>Address</p>
            <p>Contact Number</p>
            <p>Email</p>
          </div>
          <div className="flex-col">
            <p>Links</p>
            <p>
              <FaXTwitter size={20} />
            </p>
            <p>
              <CiInstagram size={20} />
            </p>
            <p>
              <FaFacebook size={20} />
            </p>
          </div>
        </div>
      </div>
      <p className="center-all py-20">&copy; 2024 Little Lemon</p>
    </footer>
  );
};

export default Footer;
