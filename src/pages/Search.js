import React, { useState, useRef } from "react";
import styles from "./Search.module.css";

// Image
import { BsBook } from "react-icons/bs";

// Loader
import { Blocks } from "react-loader-spinner";

// Components
import BookItem from "../components/BookItem";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedBooks, setSearchedBooks] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState("");
  const inputRef = useRef();

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      const fetchSearchBook = async () => {
        setLoading("Loading");
        try {
          const fetchUrl = `https://gutendex.com/books?search=${inputValue}`;
          const result = await fetch(fetchUrl);
          const data = await result.json();
          setSearchedBooks(data.results);
          setLoading("");
        } catch (error) {
          setErrorMessage("something went wrong, please try agian");
          console.log("hello world");
        }
      };

      fetchSearchBook();
    }
  };

  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-input"]}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <BsBook onClick={handleSearch} />
      </div>
      <div className={styles['search-wrapper-box']}>
        {errorMessage ? <p>{errorMessage}</p> : null}
        {searchedBooks
          ? searchedBooks.map((item) => {
              return (
                <BookItem
                key={item.id}
                  bookId={item.id}
                  bookTitle={item.title}
                  bookImage={item.formats["image/jpeg"]}
                />
              );
            })
          : null}

        {loading ? (
          <Blocks
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
