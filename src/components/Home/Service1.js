import React from "react";

export default function Service1(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6  my-3">
        <div className={`card ${props.myclassName} h-100 }`}>
          <img src={props.src} className="card-img-top p-2" alt="..."></img>
          <div className="card-body  text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
