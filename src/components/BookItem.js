import React from "react";
import "./BookItem.module.css";
import styles from './BookItem.module.css';

// Router
import { Link } from "react-router-dom";

const BookItem = ({ bookTitle, bookImage, bookId }) => {
  return (
    <Link to={`/detailBook/${bookId}`} className={styles['bookItem']}>
      <img src={bookImage} alt="bookImagePoster" />
      <p>
        {bookTitle}
      </p>
    </Link>
  );
};

export default BookItem;
