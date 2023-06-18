import React from "react";
import styles from "./BookDetail.module.css";

const BookDetail = ({
  title,
  authors,
  languages,
  copyright,
  imageUrl,
  downloadCount,
}) => {
  return (
    <div className={styles["bookDetailWrapper"]}>
      <div className={styles["bookDetailLeft"]}>
        <p className={styles["bookDetailTitle"]}>{title}</p>
        <p className={styles["bookDetailAuthors"]}>Authors: {authors[0]["name"]}</p>
        <div className={styles["bookDetailLanguages"]}>
          <p>Languages:</p>
          <div>
            {languages.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <p className={styles["bookDetailDownloadCount"]}>
          Download Count: {downloadCount}
        </p>
        <p>Copyright: {
            copyright ? "yes" : "no"    
        }</p> 
      </div>
      <div className={styles["bookDetailRight"]}>
        <img src={imageUrl} alt="bookPoster" />
      </div>
    </div>
  );
};

export default BookDetail;
