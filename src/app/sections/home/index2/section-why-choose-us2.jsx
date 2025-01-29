import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials2 from "./section-testimonials2";

export function SectionWhyChooseUs2Inner() {
  const whychooseUs = [
    {
      id: 1,
      title: "App Development",
      description:
        "High-performance mobile apps with seamless UX and security.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Intuitive, visually appealing designs for better user engagement.",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Fast, responsive, and SEO-friendly websites that drive growth.",
    },
    {
      id: 4,
      title: "Cloud Computing",
      description:
        "Scalable, secure cloud solutions with AWS, Google Cloud, and Azure.",
    },
    {
      id: 5,
      title: "AI Services",
      description:
        "Automate tasks, optimize processes, and enhance decision-making.",
    },
    {
      id: 6,
      title: "Cloud Migration",
      description: "Smooth, secure cloud transition with minimal downtime.",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-media">
            <div className="sx-ab4-img-outer">
              <div className="sx-ab4-media">
                <ItodoImage src="images/about/p3.jpg" alt="media" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-content">
            <h2 className="sx-title">Why Choose Us?</h2>
            <p>
              At MANYA AI, we offer a comprehensive suite of services to elevate
              your digital presence and enhance your business operations. Here’s
              why you should partner with us:
            </p>
            <ul className="sx-arrow-circle-checked">
              {whychooseUs.map((obj) => (
                <li key={obj.id}>
                  {obj.title}: {obj.description}
                </li>
              ))}
              {/* <li>Elite membership fee: $999.95 per month</li>
              <li>Coast-to-coast domestic flights: from $3,799.95</li> */}
            </ul>
            <NavLink
              to="/why-choose-us"
              className="site-button sx-btn-primary icon sx-btn-lg"
            >
              <i className="fa  fa-long-arrow-right" />
              View All
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionWhyChooseUs2() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx4-content-wrap p-b70">
              <SectionWhyChooseUs2Inner />
            </div>
            {/*testimonial section */}
            <SectionTestimonials2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs2;
