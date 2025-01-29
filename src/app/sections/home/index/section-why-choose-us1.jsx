import whyChooseUs from "../../../../constant";
import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionWhyChooseUs1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
        style={{
          backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})`,
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Why Choose Us</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Our Work Services</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row">
                {/* Block one */}
                {whyChooseUs.map((obj) => (
                  <div
                    key={obj.id}
                    className="col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-icon-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-icon-bx-icon ">
                          <span className="sx-text-primary">
                            {obj.icon}
                            {/* <i className="flaticon-data" /> */}
                          </span>
                        </div>
                        <div className="icon-content">
                          <NavLink to="/services/detail">
                            <h4 className="sx-tilte">{obj.title}</h4>
                          </NavLink>
                          <p>{obj.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Block SIx */}
                {/* <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-parking" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte">Car Parking Space</h4>
                        </NavLink>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs1;
