import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to={"/new"} />;
  }

  return (
    <div>
      <Header />
      <div className="vh-100">
        <h1 className="text-center fw-semibold my-5">Welcome</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
