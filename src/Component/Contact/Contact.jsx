import React from "react";
import Ui from "../UI/Ui";
import ContactCss from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <section className={`  ${ContactCss.Contact}`}>
        <div className=" container my-5   py-5 ">
          <Ui
            title="conatct section"
            textColor="#2C3E50"
            className=" #2C3E50"
          />

          <form className={`   ${ContactCss.form} w-50 mx-auto mt-5  p-3 `}>
            <div className={`${ContactCss.floatinginput}  mb-4 `}>
              <input
                type="text"
                className=" form-control-color mb-3 p-4 w-100  rounded rounded-4 border-0  border-bottom shadow  "
                placeholder=""
              />
              <label>userName</label>
            </div>

            <div className={`${ContactCss.floatinginput} mb-4`}>
              <input
                type="number"
                className=" form-control-color mb-3 p-4 w-100  rounded rounded-4 border-0  border-bottom shadow  "
                placeholder=""
              />
              <label>userAge</label>
            </div>

            <div className={`${ContactCss.floatinginput} mb-4`}>
              <input
                type=" email"
                className=" form-control-color mb-3 p-4 w-100  rounded rounded-4 border-0  border-bottom shadow  "
                placeholder=""
              />
              <label>userEmail</label>
            </div>

            <div className={`${ContactCss.floatinginput} mb-4`}>
              <input
                type="password"
                autoComplete="off"
                className=" form-control-color mb-3 p-4 w-100  rounded rounded-4 border-0  border-bottom shadow  "
                placeholder=""
              />
              <label>userpassword</label>
            </div>

            <div>
              <button
                onClick={(e) => e.preventDefault()}
                className="btn btn-outline-success shadow  rounded-4   "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
