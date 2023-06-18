import React, { useState, useEffect } from "react";
import styles from "./Details.module.css";

// Router
import { useParams } from "react-router-dom";

// Componetns
import BookDetail from "../components/BookDetail";

const Details = () => {
  const [bookDetails, setBookDetails] = useState(null);
  const params = useParams();
  const bookId = Number(params.bookId);

  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const fetchUrl = `https://gutendex.com/books/${bookId}`;
        const result = await fetch(fetchUrl);
        const data = await result.json();
        setBookDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookById();
  }, []);

  return (
    <div className={styles["detailsWrapper"]}>
      {bookDetails ? (
        <BookDetail
          key={bookDetails.id}
          title={bookDetails.title}
          languages={bookDetails.languages}
          imageUrl={bookDetails.formats["image/jpeg"]}
          downloadCount={bookDetails["download_count"]}
          copyright={bookDetails.copyright}
          authors={bookDetails.authors}
        />
      ) : null}
    </div>
  );
};

export default Details;
