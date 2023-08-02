import React from "react";
import IconSet from "./IconSet";

export default function ProjectHubnex() {
  return (
    <>
      <section className="work-category pb-5 ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 d-flex align-items-center">
              <div className="  ">
                <h2>
                  <span style={{ color: "#e82788cf" }}>P</span>ROJECT HUBNEX
                </h2>
                <p>
                  Digital India is a campaign launched by the Government of
                  India in order to ensure the Government's services are made
                  available to citizens electronically by improved online
                  infrastructure and by increasing Internet connectivity or
                  making the country digitally empowered in the field of
                  technology.Launched on 1 July 2015, by Indian Prime Minister
                  Narendra Modi, it is both enabler and beneficiary of other key
                  Government of India schemes.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="work-card-set">
                <IconSet
                  myclassName="cd1"
                  src={require("../../images/icon-1.png")}
                  title="Social Networking"
                ></IconSet>

                <IconSet
                  myclassName="cd2"
                  src={require("../../images/icon-2.png")}
                  title="Digital Marketing"
                ></IconSet>

                <IconSet
                  myclassName="cd3"
                  src={require("../../images/icon-3.png")}
                  title="Ecommerce Development"
                ></IconSet>
                <IconSet
                  myclassName="cd4"
                  src={require("../../images/icon-4.png")}
                  title="Video Service"
                ></IconSet>

                <IconSet
                  myclassName="cd5"
                  src={require("../../images/icon-5.png")}
                  title="Banking Service"
                ></IconSet>

                <IconSet
                  myclassName="cd6"
                  src={require("../../images/icon-6.png")}
                  title="Enterprise Service"
                ></IconSet>

                <IconSet
                  myclassName="cd7"
                  src={require("../../images/icon-7.png")}
                  title="Education Service"
                ></IconSet>

                <IconSet
                  myclassName="cd8"
                  src={require("../../images/icon-8.png")}
                  title="Tour and Travels"
                ></IconSet>
                <IconSet
                  myclassName="cd9"
                  src={require("../../images/icon-9.png")}
                  title="Health Service"
                ></IconSet>

                <IconSet
                  myclassName="cd10"
                  src={require("../../images/icon-10.png")}
                  title="Event & Ticket"
                ></IconSet>

                <IconSet
                  myclassName="cd11"
                  src={require("../../images/icon-11.png")}
                  title="Restaurant Service"
                ></IconSet>

                <IconSet
                  myclassName="cd12"
                  src={require("../../images/icon-12.png")}
                  title="Business Consultant"
                ></IconSet>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
