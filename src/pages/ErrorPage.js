import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 style={{
                color: "white"
            }}>404, page not found</h1>
            <Link>
                {`<-`} go back
            </Link>
        </div>
    )
};

export default ErrorPage;