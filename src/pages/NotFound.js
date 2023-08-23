import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound () {
    return (
        <div className="not-found">
            <Helmet>
                <title>John Doe | 404</title> {/* Set the title for this page */}
            </Helmet>
            <Header />
            <h1 className="error">Error 404: Page Not Found</h1>
            <Footer />
        </div>
    );
}

export default NotFound;