import React from "react";
import { logo } from "../constants/assets";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbBasketPlus } from "react-icons/tb";
import Button from "./ui/Button";

const Nav = () => {
  return (
    <>
      <nav className="nav-style">
        <Button type="white">
          <RxHamburgerMenu size={40} />
        </Button>

        <Link to={"/"} className="flex list-none">
          <img src={logo} height={50} width={50} alt="logo" />
          <h1>Little Lemon</h1>
        </Link>

        <Button type="white">
          <TbBasketPlus size={40} />
        </Button>
      </nav>
    </>
  );
};

export default Nav;
