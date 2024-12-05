import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Toaster position="bottom-center" reverseOrder={true} />
      <Footer />
    </>
  );
};

export default Layout;
