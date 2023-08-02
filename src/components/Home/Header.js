import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {" "}
      <div className="header">
        <div className="row m-0">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="p-5 mt-4 ">
              <h1 className="display-6 ">
                We have innovative team to take care of your preferences
              </h1>
              <p className="lead">
                Hubnex is a Gurgaon headquartered global venture which
                specialises in scaling up established MSMEs and start up
                businesses across various industries such as hospitality, FMCG,
                technology, services and so on.
              </p>
              <Link to="/" className="btn btn-outline-dark">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className=" header-img"
              src={require("../../images/header.png")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
