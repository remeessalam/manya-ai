import SectionVideo2 from "../../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import SectionCounter1 from "../../../sections/home/index/section-counter1";
import ItodoImage from "../../../elements/itodo-img";
import { useEffect, useState } from "react";
import { loadScript } from "../../../../globals/constants";
import { useParams } from "react-router-dom";
import { detailService } from "../../../../constant";

function ServicesDetailPage() {
  const { service } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    loadScript("js/custom.js");
  });
  useEffect(() => {
    loadScript("js/custom.js");

    // Find the service from detailsService
    const selectedService = detailService.find((item) => item.link === service);

    setServiceData(selectedService);
  }, [service]);
  console.log(serviceData, "thisisservice");
  return (
    <>
      {/* service detail SECTION START */}
      <div className="section-full p-b80 sx-ser-detail-outer sx-bg-white">
        <div className="sx-ser-detail-l-pic p-b80">
          <div className="sx-media  relative ">
            <img
              src={serviceData?.image}
              alt={serviceData?.title}
              style={{
                maxHeight: "100vh",
                objectFit: "cover",
                width: "100vw",
              }}
            />
            <div className="sx-bnr-outline-text">
              <h1> It Solution</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="sx-our-service-detail">
              {/* TITLE START */}
              <div className="section-head2">
                <div className="sx-head-s-title">Why Choose Us</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title2">{serviceData?.sectionSubtitle}</h2>
                </div>
              </div>
              {/* TITLE END */}
              <div className="sx-our-service-info m-b80">
                {serviceData?.sectionContent.map((obj, index) => (
                  <p key={index}>{obj}</p>
                ))}
                {/* <p>
                  Proin finibus imperdiet nulla, quis euismod nunc gravida eget.
                  Vestibulum iaculis nibh facilisis felis iaculis vestibulum.
                  Curabitur purus nulla, bibendum vitae varius pulvinar,
                  molestie in massa. Quis nunc, vitae rutrum libero. Duis eget
                  consectetur urna. Ut ut aliquet magna. Nullam augue nulla,
                  fermentum vel elit eu, posuere vehicula tellus. Orci varius
                  natoque penatibus et magnis dis parturient ridiculus mus. Nam
                  eget nisl non elit tempor dignissim nec non sapien.
                </p> */}
                <div className="row sx-about-icon-bx1-column p-t50 p-b20">
                  {serviceData?.icons.map((obj) => (
                    <div key={obj.title} className="col-lg-4 col-md-6 m-b30">
                      <div className="sx-icon-bx-2">
                        <div className="sx-media">
                          {/* <i className={obj.iconClass} /> */}
                          {obj.iconClass}
                        </div>
                        <div className="sx-icon-bx-info">
                          <span className="sx-icon-bx-title">{obj.title}</span>
                          <span className="sx-icon-bx-title-info">
                            {obj.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p>{serviceData?.additionalContent}</p>
              </div>

              <SectionCounter1 />
            </div>
          </div>
        </div>
      </div>
      {/* service detail SECTION END */}

      {/* <SectionVideo2 /> */}
      <SectionWhyChooseUs4 />
      <SectionClients2 />
    </>
  );
}

export default ServicesDetailPage;
