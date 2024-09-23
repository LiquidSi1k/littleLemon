import React, { useEffect, useRef, useState } from "react";
import { logo } from "../constants/assets";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { TbBasketPlus } from "react-icons/tb";
import Button from "./ui/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [lastScrollY, setScrollY] = useState(0);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClick = (e, anchor) => {
    e.preventDefault();
    const id = `${anchor}`;
    const element = document.getElementById(id);

    if (location.pathname !== "/") {
      navigate("/", { state: { anchor } });
    } else if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        if (currentScrollY > lastScrollY) {
          navRef.current.style.transform = "translateY(-200px)";
        } else {
          navRef.current.style.transform = "translateY(0)";
        }
        setScrollY(currentScrollY);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (location.state && location.state.anchor) {
      const element = document.getElementById(location.state.anchor);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state]);

  return (
    <nav className="nav-style" ref={navRef}>
      <Button type="white" className="mob-hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
      </Button>

      <Link to={"/"} className="flex list-none">
        <img src={logo} height={40} width={40} alt="logo" />
        <h1>Little Lemon</h1>
      </Link>

      <div className="list-none nav-links">
        <Link
          to="/"
          href="#history"
          className="nav-link"
          onClick={(e) => handleClick(e, "history")}
        >
          About
        </Link>
        <Link
          to="/"
          href="#menu"
          className="nav-link"
          onClick={(e) => handleClick(e, "menu")}
        >
          Menu
        </Link>
        <Link to="/booking" className="nav-link">
          Reserve table
        </Link>
        <Link
          to="/"
          href="#reviews"
          className="nav-link"
          onClick={(e) => handleClick(e, "reviews")}
        >
          Reviews
        </Link>
      </div>

      <Button type="white" className="basket">
        <TbBasketPlus size={30} />
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li onClick={toggleMenu}>
              <a href="#history">About</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#menu">Menu</a>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/booking">Reserve table</Link>
            </li>
            <li onClick={toggleMenu}>
              <a href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
