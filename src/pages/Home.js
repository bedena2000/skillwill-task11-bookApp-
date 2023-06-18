import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

// Components
import BookItem from "../components/BookItem";

// Spinners
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const apiRoute = "https://gutendex.com/books/";
    const fetchBooks = async () => {
      try {
        const result = await fetch(apiRoute);
        const data = await result.json();
        setBooks(data.results);
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong, please try again");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={styles["home-wrapper"]}>
      {errorMessage ? (
        <p className={styles["error-message"]}>{errorMessage}</p>
      ) : null}
      {books.length > 0 ? (
        books.map((item) => {
          return (
            <BookItem
              bookTitle={item.title}
              bookImage={item.formats["image/jpeg"]}
              bookId={item.id}
            />
          );
        })
      ) : (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </div>
  );
};

export default Home;
