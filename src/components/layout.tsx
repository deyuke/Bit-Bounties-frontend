import React from "react";
import { Navbar, Footer } from "./organisms/_index";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="bg-black bg-primary hidden" />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
