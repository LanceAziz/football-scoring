"use client"
import { useState } from "react";
import Groups from "./pages/groups/groups";
import styles from "./page.module.css";
import Queue from "./pages/queue/queue";
import Finals from "./pages/finals/finals";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [isFinalsShown, setIsFinalsShown] = useState(false);
  return (
    <div className="position-relative container-fluid">
      <div className="z-1 position-absolute end-0 bottom-0">
        <button className="btn bg-white text-dark rounded rounded-3 px-3 py-2 fs-5" onClick={() => setIsFinalsShown(!isFinalsShown)}>
          <FontAwesomeIcon icon={faFutbol} className="fs-1" />
        </button>
      </div>
      <div className="row">
        <div className={`col-6 overflow-auto ${styles['scroll-100']}`}>
          <Groups />
        </div>
        <div className="col-6">
          <Queue />
        </div>
      </div>
      {isFinalsShown && (
        <div className={`modal fade show d-block ${styles['scroll-100']}`} tabIndex="-1" style={{ background: "rgba(0,0,0,0.8)" }}>
          <div className={`modal-dialog modal-xl `}>
            <div className="modal-content bg-dark text-white rounded-5">
              <div className="modal-header px-4">
                <h5 className="modal-title">Finals</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setIsFinalsShown(false)}></button>
              </div>
              <div className="modal-body">
                <Finals />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
