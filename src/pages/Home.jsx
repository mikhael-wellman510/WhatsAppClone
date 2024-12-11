import React from "react";

import LeftBar from "../components/Home/LeftBar";
import RightBar from "../components/Home/RightBar";

const Home = () => {
  return (
    <>
      <div className="flex w-screen h-screen bg-pink-100">
        <LeftBar />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
