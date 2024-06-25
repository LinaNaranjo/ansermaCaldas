import React from "react";
import Description from "../../Components/Home/Description";
import Titulo from "../../Components/Home/Titulo";
import "./homePage.scss";
import Ubicacion from "../../Components/Ubicacion/Ubicacion";

const HomePage = () => {
  return (
    <>
      <div className="main"> 
        <Titulo />
        <Ubicacion />
        <Description />
      </div>
    </>
  );
};
export default HomePage;
