import React from "react";
import logo from "../../assets/logo.png";

const Lodaing = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default React.memo(Lodaing);
