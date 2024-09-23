import React from "react";
import { logo } from "../constants/assets";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbBasketPlus } from "react-icons/tb";
import Button from "./ui/Button";

const Nav = () => {
  return (
    <nav className="nav-style">
      <Button type="white" className="mob-hamburger">
        <RxHamburgerMenu size={30} />
      </Button>

      <Link to={"/"} className="flex list-none">
        <img src={logo} height={40} width={40} alt="logo" />
        <h1>Little Lemon</h1>
      </Link>

      <div className="list-none nav-links">
        <a href="#history" className="nav-link">
          About
        </a>
        <a href="#menu" className="nav-link">
          Menu
        </a>
        <Link to="/booking" className="nav-link">
          Reserve table
        </Link>
        <a href="#reviews" className="nav-link">
          Reviews
        </a>
      </div>

      <Button type="white" className="basket">
        <TbBasketPlus size={30} />
      </Button>
    </nav>
  );
};

export default Nav;
