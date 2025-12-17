import React, { useState } from "react";
import Ui from "../UI/Ui";
import PortofloCss from "./Portofolo.module.css";
import { Modal } from "react-bootstrap";

export default function Portoflo() {
  const [imegs] = useState([
    {
      img_covr:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      title: "Project 1",
    },
    {
      img_covr:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
      title: "Project 2",
    },
    {
      img_covr:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
      title: "Project 3",
    },
    {
      img_covr:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      title: "Project 4",
    },
    {
      img_covr:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
      title: "Project 5",
    },
    {
      img_covr:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
      title: "Project 6",
    },
  ]);

  const [modalShow, setModalShow] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  return (
    <>
      <section className="py-5">
        <div className="container my-5">
          <div>
            <Ui title="portfolio component" textColor="#2C3E50" />
          </div>

          <div className="row g-4">
            {imegs.map((ietm, index) => (
              <div key={index} className="col-md-4 position-relative">
                <div className="iner position-relative overflow-hidden shadow rounded">
                  <img
                    src={ietm.img_covr}
                    className="img-fluid"
                    alt={ietm.title}
                  />

                  {/* CLICK TO OPEN MODAL */}
                  <div
                    onClick={() => {
                      setActiveImg(ietm.img_covr);
                      setModalShow(true);
                    }}
                    className={`d-flex justify-content-center align-items-center ${PortofloCss.ilayr}`}
                  >
                    <i
                      className={`fa-solid fa-plus fs-1 fw-bold text-white ${PortofloCss.iconn}`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL HERE */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          {activeImg && (
            <img className="img-fluid w-100" src={activeImg} alt="Selected" />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
