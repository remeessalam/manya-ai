import { Link } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";
import { companyDetails } from "../../../../constant";

function SectionOurInfo1() {
  return (
    <>
      <div className="sx-mv-bx1-content-wrap">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="sx-about-bx1-content">
              <h2 className="sx-title">That's why we're list of favorites.</h2>
              <span className="sx-title-2">
                At {companyDetails.name}, we’re more than just a service
                provider -
              </span>
              <p>
                We’re a partner committed to your success. With deep expertise,
                a focus on innovation, and a customer-first approach, we create
                tailored solutions that help your business grow. Our team works
                closely with you, ensuring seamless communication and timely
                delivery. We deliver high-quality results on time, within
                budget, and with a focus on lasting impact. Whether you need web
                development, AI solutions, or cloud services, you can trust us
                to bring your vision to life with precision and care. Let’s
                build something great together!
              </p>
              <div className="progress">
                <div
                  className="progress-bar sx-bg-primary"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>95.00% Work Success</span>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar sx-bg-primary"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>95.00% Work Success</span>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar sx-bg-primary"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>95.00% Work Success</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="sx-mv-bx1-media">
              <div className="sx-dot-bx-right">
                <ItodoImage src="images/about/dotted-pic.png" alt="image" />
              </div>
              <div className="sx-mv-img-outer">
                <div className="sx-mv-img-section-2">
                  <ItodoImage src="images/about/p1-1.jpg" alt="image" />
                </div>
                <div className="sx-mv-img-section-1-wrap">
                  <div className="sx-mv-video">
                    <Link to="#" className=" circle">
                      <i className="flaticon-play" />
                    </Link>
                  </div>
                  <div
                    className="sx-mv-img-section-1"
                    style={{
                      backgroundImage: `url(${publicUrlFor(
                        "images/about/right-pic.png"
                      )})`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOurInfo1;
