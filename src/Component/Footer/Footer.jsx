import React from "react";
import FooterCss from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={` ${FooterCss.Footer}`}>
        <div className="  container p-3 ">
          <div className=" row  ">
            <div className="col-md-4">
              <div className="iner text-center p-2">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="iner text-center p-1">
                <h3>AROUND THE WEB</h3>

                <div>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="iner text-center p-2">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <p className={`     py-3 text-center  ${FooterCss.pfooter}`}>
        Copyright © Your Website 2021
      </p>
    </>
  );
}
