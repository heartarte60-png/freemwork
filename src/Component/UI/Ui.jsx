import React from "react";
import UiCss from "./Ui.module.css";

export default function Ui({
  title,
  subtitle,
  iconClass,
  textColor,
  lineColor,
}) {
  return (
    <>
      <div
        className={`${UiCss.UI}   d-flex justify-content-center align-items-center flex-column `}
        style={{ "--lineColor": lineColor, color: textColor }}
      >
        <h2 className={"  fw-bold text-uppercase "}> {title}</h2>

        <i className="fa-solid fa-star ui-icon"> {iconClass}</i>

        <div className={`${UiCss.uiline} `}></div>

        <p className=" mb-2">{subtitle}</p>
      </div>
    </>
  );
}
