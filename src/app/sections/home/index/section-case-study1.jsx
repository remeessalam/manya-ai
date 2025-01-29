import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials1 from "./section-testimonials1";
import { caseStudy } from "../../../../constant";
import SectionTestimonials3 from "../index3/section-testimonials3";

function SectionCaseStudy1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-bg-light sx-case-study-outer wow fadeInDown"
        data-wow-duration="1000ms"
      >
        <div className="container">
          {/*Large Title*/}
          <div className="large-title-block">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* TITLE START */}
                <div className="section-head left">
                  <div className="sx-head-s-title">Our Case Study</div>
                  <div className="sx-head-l-title">
                    <h2 className="sx-title">
                      Driving Digital Transformation with Cutting-Edge IT
                      Solutions
                    </h2>
                  </div>
                </div>
                {/* TITLE END */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="large-title-info">
                  <p>
                    A leading e-commerce brand partnered with us to revamp their
                    digital presence. We developed a high-performance web and
                    mobile platform, integrating AI-powered recommendations and
                    a seamless checkout experience. The result? A 40% increase
                    in conversions and enhanced customer engagement. Our
                    end-to-end solutions helped them scale efficiently while
                    maintaining security and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="owl-carousel sx-case-st-carousel">
              {/*One two*/}
              {caseStudy.map((obj) => (
                <div className="item">
                  <div className="sx-case-study-bx sx-overlay-effect">
                    <div className="sx-case-media sx-img-overlay">
                      <NavLink to={obj.link}>
                        <img src={obj.image} alt="" />
                      </NavLink>
                      <NavLink to={obj.link} className="sx-case-link">
                        <i className="flaticon-up-right-arrow" />
                      </NavLink>
                    </div>
                    <div className="sx-case-info">
                      <NavLink className="sx-l-title" to={obj.link}>
                        <h2 className="sx-title sx-s-title">{obj.name}</h2>
                      </NavLink>
                      <div
                        className="sx-s"
                        style={{ color: "black", marginBottom: "15px" }}
                      >
                        {obj.description}
                      </div>
                      <div className="sx-case-readmore">
                        <NavLink
                          to={obj.link}
                          title="READ MORE"
                          rel="bookmark"
                          className="site-button icon"
                        >
                          <i className="fa  fa-long-arrow-right" />
                          Visit
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/*One three*/}
              {/* <div className="item">
                <div className="sx-case-study-bx sx-overlay-effect">
                  <div className="sx-case-media sx-img-overlay">
                    <NavLink to="/portfolio/detail">
                      <ItodoImage src="images/case-study/pic-1.jpg" alt="" />
                    </NavLink>
                    <NavLink to="/portfolio/detail" className="sx-case-link">
                      <i className="flaticon-up-right-arrow" />
                    </NavLink>
                  </div>
                  <div className="sx-case-info">
                    <div className="sx-s-title">Apps Design</div>
                    <NavLink className="sx-l-title" to="/portfolio/detail">
                      <h2 className="sx-title">
                        IT Solution Business Mokup land
                      </h2>
                    </NavLink>
                    <div className="sx-case-readmore">
                      <NavLink
                        to="/portfolio/detail"
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button icon"
                      >
                        <i className="fa  fa-long-arrow-right" />
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*One four*/}
              {/* <div className="item">
                <div className="sx-case-study-bx sx-overlay-effect">
                  <div className="sx-case-media sx-img-overlay">
                    <NavLink to="/portfolio/detail">
                      <ItodoImage src="images/case-study/pic-2.jpg" alt="" />
                    </NavLink>
                    <NavLink to="/portfolio/detail" className="sx-case-link">
                      <i className="flaticon-up-right-arrow" />
                    </NavLink>
                  </div>
                  <div className="sx-case-info">
                    <div className="sx-s-title">Branding Design</div>
                    <NavLink className="sx-l-title" to="/portfolio/detail">
                      <h2 className="sx-title">
                        Visit Our planned modern farm
                      </h2>
                    </NavLink>
                    <div className="sx-case-readmore">
                      <NavLink
                        to="/portfolio/detail"
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button icon"
                      >
                        <i className="fa  fa-long-arrow-right" />
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/*testimonial section */}
            {/* <SectionTestimonials1 /> */}
            <SectionTestimonials3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCaseStudy1;
