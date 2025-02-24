import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";
import SectionCounter1 from "./section-counter1";
import { Link } from "react-router-dom";

function SectionAboutCompany1() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-1-wrap">
                        <div className="sx-ab-video">
                          {/* https://www.youtube.com/watch?v=c1XNqw2gSbU */}
                          <div className=" circle">
                            <i className="flaticon-play" />
                          </div>
                        </div>
                        <div
                          className="sx-ab-img-section-1"
                          style={{
                            backgroundImage: `url(${publicUrlFor(
                              "images/about/left-pic.png"
                            )})`,
                            objectFit: "cover !important",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                          }}
                        />
                      </div>
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      Why We're Trusted by Industry Leaders
                    </h2>
                    <span className="sx-title-2">
                      Transforming businesses through innovative digital
                      solutions
                    </span>
                    <p>
                      With 10+ years of expertise in app development, AI
                      solutions, and cloud technologies, we've delivered 250+
                      successful projects for clients across 15 industries,
                      driving measurable results and digital transformation.
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar sx-bg-primary"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>95.00% Client Satisfaction Rate</span>
                      </div>
                    </div>
                    <div className="row sx-about-bx1-column">
                      <div className="col-lg-6 col-md-6">
                        <p>
                          Full-cycle development from concept to deployment with
                          agile methodology and continuous integration.
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <p>
                          Enterprise-grade security protocols and SLA-backed
                          maintenance for mission-critical systems.
                        </p>
                      </div>
                    </div>
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-mouse" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              AI Solutions
                            </span>
                            <span className="sx-icon-bx-title-info">
                              47 Projects
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-download" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              Cloud Migration
                            </span>
                            <span className="sx-icon-bx-title-info">
                              32 Projects
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COUNTER START */}
            <SectionCounter1 />
            {/* COUNTER  END */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany1;
