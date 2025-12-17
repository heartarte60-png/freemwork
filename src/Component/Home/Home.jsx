import React from "react";
import Ui from "../UI/Ui";

export default function Home() {
  return (
    <div id="Home" className="  ">
      <div className=" w-100 d-flex justify-content-center align-items-center my-5 imegg ">
        <img
          className=" img-fluid w-25"
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt=""
        />
      </div>
      <Ui
        title=" start Framework"
        textColor="white"
        subtitle="Graphic Artist - Web Designer - Illustrator"
        lineColor="white"
      />
    </div>
  );
}
