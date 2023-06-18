import React from "react";
import styles from "./BookInfo.module.css";

// Routes
import { Link } from "react-router-dom";

// images
import Logo from "../assets/logo.svg";
import { BiSearch } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const BookInfo = () => {
  return (
    <div className={styles["book-info"]}>
      <div className={styles["book-info__logo"]}>
        <img src={Logo} alt="pageLogo" />
      </div>

      <div className={styles["book-info__navigation"]}>
        <Link to="/search">
          <BiSearch />
        </Link>
        <Link to="/">
          <BiHomeAlt />
        </Link>
      </div>
    </div>
  );
};

export default BookInfo;
