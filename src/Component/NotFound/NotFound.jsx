import React from "react";

export default function NotFound() {
  return (
    <>
      <section className="py-5  " id="NotFound">
        <div className=" container p-5 py-5">
          <div className=" w-75 mx-auto p-5 py-5">
            <h1 className="  display-1  fw-bold shadow rounded text-white">
              Not Found
            </h1>

            <h3 className="   mb-4 shadow rounded text-white">
              This page doesn’t exist.
            </h3>

            <p className="fw-bold shadow rounded text-white">
              If this is a mistake, let us know, and we will try to fix it!
            </p>

            <h5 className="  shadow rounded text-white">
              Oops! That didn’t work — but every wrong step brings you closer to
              the right one.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
