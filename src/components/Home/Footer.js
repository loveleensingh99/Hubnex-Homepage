import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white footer pt-5">
        <div className="container py-3">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src={require("../../images/logo.png")}
                alt=""
                width="180"
                className="mb-3 footer-logo"
              ></img>
              <p className="font-italic ">
                Hubnex Media INC. #05, Huddle, Ground Floor, Tower-B, DLF Cyber
                City, <br /> Gurugram, Haryana-122002 <br /> Phone: +91
                6392-750561 <br /> Email: hello@hubnex.in
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inlisne-item">
                  <a href="#" target="_blank" title="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Useful Links
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Terms of service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Our Services
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Website & App Development
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Search Engine Optimization
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Social Media Optimisation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    PR & Brand Management
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>
              <p className="text-muted mb-4">Subsribe for More</p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email "
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                  ></input>
                  <div className="input-group-append">
                    <button id="btn " type="submit" className="btn btn-link">
                      {" "}
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2022 All rights reserved.This website is designed by Loveleen
              Singh
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
