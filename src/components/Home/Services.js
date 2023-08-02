import React from "react";
import Service1 from "./Service1";

export default function Services() {
  return (
    <>
      <div className="container my-5 section4">
        <h2 className="d-block display-4 text-center">
          <span style={{ color: "#e82788cf" }}>S</span>ervices
        </h2>
        <div className="row">
          <Service1
            myclassName="service-one"
            src={require("../../images/service-img-1.png")}
            title="Website & Application"
            desc="  In the world of digital revolution, a fantastic user friendly
                  website making good business sense will fetch you far more
                  customers than a regular website."
          />
          <Service1
            myclassName="service-two"
            src={require("../../images/service-img-2.png")}
            title="Search Engine Optimization"
            desc="     In the world of digital revolution, a fantastic user friendly
                  website making good business sense will fetch you far more
                  customers than a regular website."
          />

          <Service1
            myclassName="service-three"
            src={require("../../images/service-img-3.png")}
            title="Social Media Optimisation"
            desc="   Social media optimization uses social media as a catalyst to
                  increase your brand presence. Through strategy and creative
                  campaigns, we increase the awareness."
          />

          <Service1
            myclassName="service-four"
            src={require("../../images/service-img-4.png")}
            title="Content Management"
            desc="   We provide you with relatable high quality content, logo
                  designs, infographics and videos to give your brand an
                  outstanding presence on various social media platforms."
          />

          <Service1
            myclassName="service-five"
            src={require("../../images/service-img-5.png")}
            title="Video Production & Promotion"
            desc="  We live in a world driven by images and visual storytelling.
                  HubNex has helped countless businesses tell their unique
                  stories."
          />

          <Service1
            myclassName="service-six"
            src={require("../../images/service-img-6.png")}
            title="Emerging Technology Services"
            desc="   We help you with emerging technology that you prefer for your
                  business - Big data, cloud-based services, business
                  intelligence solutions, Internet of Thing."
          />
        </div>
      </div>
    </>
  );
}
