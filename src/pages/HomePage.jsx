import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { Chatbot } from "../components/Chatbot";

const HomePage = () => {
  return (
    <div>
      {/* sidebar */}
      <div className="d-flex gap-3">
        <Sidebar />
        <div className="main-container">
          <Main />
        </div>
      </div>

      {/* main */}
      {/* flider */}
      
    </div>
  );
};

export default HomePage;
