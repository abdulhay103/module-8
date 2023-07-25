import React from "react";
import Layout from "../components/layout/Layout";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalAmount = searchParams.get("totalAmount");
  console.log(totalAmount);
  return (
    <Layout>
      <h1>I'm From Home Page</h1>
    </Layout>
  );
};

export default Home;
<h1>Home page</h1>;
