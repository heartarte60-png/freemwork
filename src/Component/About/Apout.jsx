import React from "react";
import Ui from "../UI/Ui";

export default function Apout() {
  return (
    <>
      <section id="About">
        <div className=" container text-center">
          <div className="row   ">
            <div className="    col-md-12 mb-4 ">
              <Ui title="about component" textColor="white" lineColor="white" />
            </div>

            <div className="col-md-6  ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.{" "}
              </p>
            </div>

            <div className="col-md-6  ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
