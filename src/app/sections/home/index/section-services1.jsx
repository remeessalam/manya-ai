import { NavLink } from "react-router-dom";
import { allServices } from "../../../../constant";

function SectionServices1() {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Our Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Empowering Innovation with AI-Driven Technology Solutions
              </h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-our-services-bx">
              <div className="row">
                {/* Block one */}
                {allServices.map((obj) => (
                  <div
                    key={obj.id}
                    className="col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-service-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-service-bx-icon scale-in-center">
                          <span className="sx-text-primary">
                            {obj.icon}
                            {/* <i className="flaticon-security" /> */}
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="sx-tilte">{obj.title}</h4>
                          <p>{obj.description}</p>
                          <div className="sx-center-btn">
                            <NavLink
                              to={`/services/${obj.link}`}
                              className="site-button-circle"
                            >
                              <i className="fa fa-long-arrow-right" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionServices1;
