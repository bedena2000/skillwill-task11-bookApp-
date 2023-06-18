import React from "react";
import styles from './AppWrapper.module.css';

// Components
import BookInfo from "./BookInfo";

// Router
import { Outlet } from "react-router-dom";

const AppWrapper = () => {
    return (
        <div className={styles['app-wrapper-box']}>
            <BookInfo />
            <Outlet />
        </div>
    )
};

export default AppWrapper;
