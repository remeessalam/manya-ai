import { publicUrlFor } from "../../../../globals/constants";
import { Link, NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import { companyDetails } from "../../../../constant";
register();

function SectionSlider1() {
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/main-slider/slider1/slide1.jpg"
              )})`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  Welcome to MANYA AI
                </span>
                <h2 className="sx-bnr-1-large-title">
                  Your Trusted Digital Transformation Partner
                </h2>
                <div className="sx-bnr-1-info">
                  In today’s fast-evolving digital landscape, businesses need
                  innovative and reliable solutions to stay ahead. At{" "}
                  {companyDetails.name}, we offer a wide range of services that
                  help you transform, scale, and optimize your operations.
                  Whether you’re looking to develop a cutting- edge mobile app,
                  create stunning web designs, or leverage the power of
                  artificial intelligence, our team is here to bring your vision
                  to life.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                <div className="sx-bnr-video">
                  <Link to="#" className="mfp-video circle">
                    <i className="flaticon-play" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="animate-charcter">IT Solution</h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/main-slider/slider1/slide2.jpg"
              )})`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  Welcome to {companyDetails.name}
                </span>
                <h2 className="sx-bnr-1-large-title">
                  Innovative Solutions for a Digital-First World
                </h2>
                <div className="sx-bnr-1-info">
                  At {companyDetails.name}, we specialize in delivering
                  cutting-edge solutions that drive digital transformation for
                  businesses of all sizes. From mobile apps to artificial
                  intelligence, our team of experts is dedicated to helping you
                  stay ahead of the curve and thrive in an increasingly digital
                  world.
                  <br />
                  Whether you're a startup looking to create your first app or
                  an enterprise aiming to modernize your infrastructure, we’ve
                  got you covered. Here's how we can help you achieve your
                  goals:
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                <div className="sx-bnr-video">
                  <Link to="#" className="mfp-video circle">
                    <i className="flaticon-play" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="sx-title">Analytics</h1>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        {/* !swiper slides */}
        {/* Add Arrows */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </>
  );
}

export default SectionSlider1;
