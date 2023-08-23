import React from "react";
import Header from "../components/Header";

function NotFound () {
    return (
        <div className="not-found">
            <Header />
            <h1 className="error">Error 404: Page Not Found</h1>
        </div>
    );
}

export default NotFound;