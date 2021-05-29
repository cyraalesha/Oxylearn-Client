import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.generated.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      {/* Nav */}
      <Navbar />

      <h1 className="text-blue-300 font-black text-3xl">hi</h1>

      {/* Body */}
      {/* New Post Modal */}
      {/* Button */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
