import {
  FaChartLine,
  FaCloud,
  FaCloudUploadAlt,
  FaCode,
  FaCogs,
  FaComments,
  FaDatabase,
  FaDesktop,
  FaGamepad,
  FaHandsHelping,
  FaLightbulb,
  FaMobile,
  FaPaintBrush,
  FaPalette,
  FaRegCommentDots,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaShoppingCart,
  FaTabletAlt,
  FaTools,
  FaUserCheck,
  FaUserFriends,
} from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
//case study images
import ghome from "./assets/web-development-portfoilo/5ghomes.png";
import bayut from "./assets/web-development-portfoilo/bayut.png";
import cold_creekcap from "./assets/web-development-portfoilo/cold creekcap.png";
import emergency_music from "./assets/web-development-portfoilo/emergency music .png";
import flatiorn from "./assets/web-development-portfoilo/flatiorn.png";
import maven from "./assets/web-development-portfoilo/maven.png";
import menissa_caterings from "./assets/web-development-portfoilo/menissa caterings.png";
import methodist from "./assets/web-development-portfoilo/methodist.png";
import think_reality from "./assets/web-development-portfoilo/think reality.png";
import appDevelopment from "./assets/services/service-detail-app.jpg";
import uiuxdevelopment from "./assets/services/service-detail-uiux.jpg";
import webdevelopment from "./assets/services/service-detail-web.jpg";
import clouddevelopment from "./assets/services/service-detail-cloud.jpg";
import aidevelopment from "./assets/services/service-details-ai.jpg";
import migrationdevelopment from "./assets/services/service-details-migration.jpg";
import { FaMobileAlt, FaSyncAlt } from "react-icons/fa"; // Import React Icons

export const companyDetails = {
  name: "MANYA AI",
  email: "surendhar@shreemanya.in",
  phone1: "+91-7411331718",
  phone3: "+91-8300609627",
  phone2: "+91-9345361250.",
  address: "address",
  //   address: `Mr. Thirumavalavan Janaki Raman.
  // 14/1,home, Tiruchencode Taluk,
  // Malaikavalr Kovil Street, Near Vinayakar Temple,
  // Tiruchengode Namakkal Tamilnadu – 637211, India.`,
};
export const allServices = [
  {
    id: 1,
    link: "app-development",
    title: "App Development",
    description:
      "Custom mobile apps for iOS, Android, and cross-platform solutions, optimized for performance, security, and user engagement.",
    content:
      "In today’s mobile-first world, your business needs more than just an app – you need a solution that resonates with your users and enhances their experience. At MANYA AI, we specialize in developing high-performance mobile apps that are intuitive, feature-rich, and scalable. Whether you need a native mobile app for iOS or Android, or a cross-platform app that works seamlessly across all devices, we ensure your app is optimized for performance, security, and user engagement.",
    icon: <FaMobile />,
    points: [
      {
        heading: "Native Mobile Apps",
        description:
          "Build high-performance native apps that take full advantage of platform-specific features and offer a seamless user experience on iOS and Android.",
      },
      {
        heading: "Cross-Platform Development",
        description:
          "Save time and resources with apps built on frameworks like React Native or Flutter that work flawlessly across multiple platforms.",
      },
      {
        heading: "App Maintenance & Updates",
        description:
          "We ensure your app continues to perform optimally with regular maintenance, bug fixes, and timely updates.",
      },
    ],
  },
  {
    id: 2,
    title: "UI/UX Design",
    link: "uiux-design",
    description:
      "Intuitive, responsive, and visually stunning designs that ensure seamless and engaging user experiences.",
    content:
      "User experience and interface design are critical to the success of any digital product. Our team of expert designers creates intuitive, responsive, and visually stunning designs that ensure your users have a seamless and engaging experience. We focus on crafting user-centered designs that align with your business objectives and resonate with your target audience.",
    icon: <FaPaintBrush />,
    points: [
      {
        heading: "User-Centered Design",
        description:
          "Every design is rooted in understanding your users’ needs, behaviors, and expectations, ensuring a product that is both functional and delightful to use.",
      },
      {
        heading: "Interactive Prototyping & Wireframing",
        description:
          "We bring your ideas to life with interactive prototypes, allowing you to visualize and test the user journey before development.",
      },
      {
        heading: "Responsive & Adaptive Design",
        description:
          "Our designs adapt seamlessly to any device, ensuring your product looks and functions perfectly on desktops, tablets, and smartphones.",
      },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    link: "web-development",
    description:
      "Custom websites and e-commerce platforms designed for speed, security, and measurable business results.",
    content:
      "Your website is the digital face of your business. At MANYA AI, we build custom websites that are fast, secure, and designed to convert. From dynamic, content-rich websites to fully integrated e-commerce platforms, we focus on creating websites that not only look great but also perform well and drive measurable results.",
    icon: <FaCode />,
    points: [
      {
        heading: "Custom Web Solutions",
        description:
          "We build tailor-made websites that align with your business goals, offering a unique and scalable solution to meet your needs.",
      },
      {
        heading: "E-Commerce Development",
        description:
          "From setting up online stores to managing payment gateways and inventory, we create fully functional e-commerce solutions that drive sales.",
      },
      {
        heading: "CMS Development",
        description:
          "Manage your content with ease using platforms like WordPress, Shopify, or custom-built solutions, ensuring your website is always up-to-date.",
      },
    ],
  },
  {
    id: 4,
    title: "Cloud Computing Services",
    link: "cloud-computing-services",
    description:
      "Scalable, secure, and cost-effective cloud solutions for infrastructure, data storage, and disaster recovery.",
    content:
      "Cloud computing has transformed how businesses operate, enabling flexibility, scalability, and cost savings. At MANYA AI, we offer cloud solutions that empower your business to operate more efficiently, securely, and cost-effectively. From cloud infrastructure setup to data storage and disaster recovery, we ensure your business has the right cloud solutions to meet your needs.",
    icon: <FaCloud />,
    points: [
      {
        heading: "Cloud Infrastructure Setup",
        description:
          "Build a secure, reliable, and scalable cloud infrastructure tailored to your business’s requirements, enabling growth and flexibility.",
      },
      {
        heading: "Data Storage & Backup",
        description:
          "Safeguard your business-critical data with secure, scalable cloud storage solutions that ensure easy access and recovery when needed.",
      },
      {
        heading: "Disaster Recovery & Continuity",
        description:
          "Minimize downtime and ensure business continuity with robust cloud-based disaster recovery solutions.",
      },
    ],
  },
  {
    id: 5,
    title: "Artificial Intelligence Services",
    link: "artificial-intelligence-services",
    description:
      "AI solutions for automation, machine learning, chatbots, and natural language processing to drive business growth.",
    content:
      "Artificial Intelligence is revolutionizing industries, and we’re here to help you harness its power. From machine learning to natural language processing, our AI services help you automate processes, make data-driven decisions, and unlock new opportunities for growth and efficiency.",
    icon: <FaRobot />,
    points: [
      {
        heading: "Machine Learning & Predictive Analytics",
        description:
          "Leverage machine learning models to analyze data, predict trends, and automate business processes for increased efficiency.",
      },
      {
        heading: "AI-Powered Chatbots",
        description:
          "Enhance customer service with AI-driven chatbots that provide instant responses, improve engagement, and streamline operations.",
      },
      {
        heading: "Natural Language Processing (NLP)",
        description:
          "Use NLP to understand and process text or speech, enabling smarter customer interactions and automating routine tasks.",
      },
    ],
  },
  {
    id: 6,
    title: "Cloud Migration Services",
    link: "cloud-migration-services",
    description:
      "Seamless and secure migration of data, applications, and systems to the cloud with minimal disruption.",
    content:
      "Migrating your infrastructure to the cloud can be a complex and challenging task. But with MANYA AI, the process is smooth and hassle-free. We provide cloud migration services that ensure your data, applications, and systems are securely and efficiently moved to the cloud with minimal disruption to your business operations.",
    icon: <FaCloudUploadAlt />,
    points: [
      {
        heading: "Cloud Readiness Assessment",
        description:
          "We assess your existing infrastructure to determine the best approach for migrating your systems and data to the cloud.",
      },
      {
        heading: "Data & Application Migration",
        description:
          "We handle the entire migration process, ensuring your applications, data, and systems are securely moved without data loss or downtime.",
      },
      {
        heading: "Post-Migration Support",
        description:
          "After migration, we provide ongoing support to monitor performance, optimize cloud resources, and ensure your cloud infrastructure is running at its best.",
      },
    ],
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: <FaLightbulb />,
    title: "Expertise",
    description:
      "With years of experience in mobile app development, UI/UX design, cloud computing, AI solutions, and more, we have the skills to turn your vision into reality.",
  },
  {
    id: 2,
    icon: <FaHandsHelping />,
    title: "Personalized Support",
    description:
      "We build strong relationships by understanding your challenges and delivering tailored solutions that drive success.",
  },
  {
    id: 3,
    icon: <FaUserCheck />,
    title: "Client-Centered Approach",
    description:
      "Your satisfaction is our priority. We are committed to clear communication, transparency, and timely results.",
  },
  {
    id: 4,
    icon: <FaCogs />,
    title: "Innovative Solutions",
    description:
      "We stay ahead of the curve by leveraging cutting-edge technologies and trends to build future-ready solutions that give you a competitive edge.",
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Security & Reliability",
    description:
      "We prioritize security in every project, ensuring that our solutions are reliable, scalable, and protected against potential threats.",
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: "Proven Success",
    description:
      "With a portfolio of successful projects across industries, we have demonstrated our ability to deliver measurable results and drive business growth.",
  },
];

export const caseStudy = [
  {
    id: 1,
    image: ghome,
    name: "5G Homes",
    link: "https://5ghighspeedinternet.co",
    description:
      "5G Homes offers high-speed internet solutions to homes and businesses, ensuring reliable and fast connections.",
  },
  {
    id: 2,
    image: bayut,
    name: "Bayut",
    link: "https://www.bayut.com",
    description:
      "Bayut is a leading property portal, providing comprehensive listings for buying, renting, and selling properties in the UAE.",
  },
  {
    id: 3,
    image: cold_creekcap,
    name: "Cold Creek Cap",
    link: "https://www.coldcreekcap.com",
    description:
      "Cold Creek Cap is a premier cap manufacturer offering high-quality caps for outdoor and sports enthusiasts.",
  },
  {
    id: 4,
    image: emergency_music,
    name: "Emergency Music Distribution",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
    description:
      "Emergency Music Distribution provides an online platform for artists to distribute their music globally.",
  },
  {
    id: 5,
    image: flatiorn,
    name: "Flatiorn",
    link: "https://www.figma.com/design/syARcSBYKhwEzsEmlpB2jR/Crypto-UI-App-%26-Admin?node-id=0-1&t=qrubmjqZL7GxJUk2-0",
    description:
      "Flatiorn is an innovative cryptocurrency trading platform offering users easy access to digital assets and blockchain technology.",
  },
  {
    id: 6,
    image: maven,
    name: "Maven",
    link: "https://www.figma.com/design/ZoowfS1VMFLRKKcsdd3Myh/Potea-(Copy)?node-id=727-25421&t=KThAYD7OOdc4oeEV-1",
    description:
      "Maven is a project management tool designed to streamline communication and task tracking within teams.",
  },
  {
    id: 7,
    image: menissa_caterings,
    name: "Menissa's Catering",
    link: "https://messinascatering.com",
    description:
      "Menissa's Catering offers exceptional catering services for events of all sizes, delivering delicious food with impeccable service.",
  },
  {
    id: 8,
    image: methodist,
    name: "Methodist Health",
    link: "https://www.figma.com/design/Xtua9ElE5Eg7MV7baS6Bzn/TGFX-Workfile-(Copy)?t=JDLWFCCc24GDqh1T-0",
    description:
      "Methodist Health is dedicated to providing high-quality healthcare services and compassionate care to all patients.",
  },
  {
    id: 9,
    image: think_reality,
    name: "Think Realty",
    link: "https://thinkrealty.ae",
    description:
      "Think Realty is a real estate platform providing insights, news, and opportunities for real estate investors and homebuyers.",
  },
];

export const testimonials = [
  {
    id: 1,
    clientSay:
      "5G Homes provided us with an incredible solution that improved our internet speed and reliability. We highly recommend their services!",
    clientName: "John Doe",
    position: "CEO",
    companyName: "5G Homes",
  },
  {
    id: 2,
    clientSay:
      "Bayut has truly revolutionized the property market in the UAE. The platform is user-friendly and highly efficient.",
    clientName: "Amina Shah",
    position: "Founder & CEO",
    companyName: "Bayut",
  },
  {
    id: 3,
    clientSay:
      "Cold Creek Cap offers top-notch products. The quality of their caps is unmatched, and we’re proud to be working with them.",
    clientName: "David White",
    position: "Product Manager",
    companyName: "Cold Creek Cap",
  },
  {
    id: 4,
    clientSay:
      "Emergency Music Distribution has been a game-changer for our music business, allowing us to easily reach a global audience.",
    clientName: "Sarah Lee",
    position: "Marketing Director",
    companyName: "Emergency Music Distribution",
  },
  {
    id: 5,
    clientSay:
      "Flatiorn's user-friendly platform allowed us to seamlessly enter the cryptocurrency market with confidence.",
    clientName: "Mohammed Ali",
    position: "Founder & CEO",
    companyName: "Flatiorn",
  },
  {
    id: 6,
    clientSay:
      "Maven has significantly improved our team’s workflow and productivity. It's a powerful tool for project management.",
    clientName: "Sophia Turner",
    position: "Operations Manager",
    companyName: "Maven",
  },
  {
    id: 7,
    clientSay:
      "Menissa's Catering provided us with an exceptional experience. The food and service were flawless, and we couldn’t be happier.",
    clientName: "Rebecca Hall",
    position: "Event Planner",
    companyName: "Menissa's Catering",
  },
  {
    id: 8,
    clientSay:
      "Methodist Health has been instrumental in providing excellent care to our patients. Their professionalism is unparalleled.",
    clientName: "Dr. William Carter",
    position: "Chief Medical Officer",
    companyName: "Methodist Health",
  },
  {
    id: 9,
    clientSay:
      "Think Realty’s insights and real estate opportunities have helped us make informed investment decisions. A fantastic platform!",
    clientName: "Lucas Green",
    position: "Real Estate Investor",
    companyName: "Think Realty",
  },
];

export const detailService = [
  {
    id: 1,
    link: "app-development",
    title: "App Development",
    image: appDevelopment,
    sectionTitle: "Why Choose Us",
    sectionSubtitle:
      "Custom mobile apps for iOS, Android, and cross-platform solutions, optimized for performance, security, and user engagement.",
    sectionContent: [
      "In today’s mobile-first world, your business needs more than just an app – you need a solution that resonates with your users and enhances their experience. At MANYA AI, we specialize in developing high-performance mobile apps that are intuitive, feature-rich, and scalable. Whether you need a native mobile app for iOS or Android, or a cross-platform app that works seamlessly across all devices, we ensure your app is optimized for performance, security, and user engagement.",
      "Our mobile app development services include custom-built solutions tailored to your business needs. From concept to deployment, we work closely with you to ensure your app is a success, delivering a seamless and engaging user experience across all platforms.",
    ],
    icons: [
      {
        iconClass: <FaMobileAlt />, // React Icon for Mobile
        title: "Native Mobile Apps",
        subtitle: "Seamless user experience on iOS & Android.",
      },
      {
        iconClass: <FaCode />, // React Icon for Cross-Platform
        title: "Cross-Platform Development",
        subtitle: "React Native & Flutter solutions.",
      },
      {
        iconClass: <FaSyncAlt />, // React Icon for Maintenance & Updates
        title: "App Maintenance & Updates",
        subtitle: "Regular maintenance & bug fixes.",
      },
    ],

    additionalContent:
      "We offer continuous support to ensure that your mobile app stays updated and fully optimized. Whether it's adding new features, fixing bugs, or ensuring compatibility with the latest OS updates, we are here to ensure your app always performs at its best.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    link: "uiux-design",
    image: uiuxdevelopment,

    sectionTitle: "Why Choose Us",
    sectionSubtitle:
      "Designing experiences that connect with users and drive engagement.",
    sectionContent: [
      "Great design is more than aesthetics; it's about usability, accessibility, and emotional impact. We create user experiences that are not just visually appealing but also intuitive and efficient, ensuring that your digital product meets business goals while delighting users.",
      "Our design process is research-driven, focusing on understanding user behaviors and needs. Through prototyping and testing, we refine every interaction to create seamless and enjoyable experiences across all touchpoints.",
    ],
    icons: [
      {
        iconClass: <FaUserFriends />,
        title: "Human-Centered Approach",
        subtitle: "User Experience",
      },
      {
        iconClass: <FaPalette />,
        title: "Prototyping & Testing",
        subtitle: "UX Strategy",
      },
      {
        iconClass: <FaTabletAlt />,
        title: "Responsive Design",
        subtitle: "Cross-Platform Compatibility",
      },
    ],

    additionalContent:
      "By leveraging the latest design principles and technologies, we ensure that your product not only looks exceptional but also offers an engaging and seamless user journey. Whether it's a website, mobile app, or enterprise software, our UI/UX designs elevate your brand’s digital presence.",
  },
  {
    id: 3,
    title: "Web Development",
    link: "web-development",
    sectionTitle: "Why Choose Us",
    image: webdevelopment,

    sectionSubtitle:
      "Building digital experiences that drive engagement and business growth.",
    sectionContent: [
      "A well-designed website is more than just an online presence; it’s a powerful tool that enhances your brand identity, attracts visitors, and converts them into customers. We create web solutions that are tailored to your needs, ensuring speed, security, and user-friendliness.",
      "With our expertise in modern web technologies and frameworks, we build highly functional websites that are visually appealing, responsive, and optimized for performance. Our development approach ensures seamless user experiences across all devices.",
    ],
    icons: [
      {
        iconClass: <FaDesktop />, // React Icon for Custom Development
        title: "Custom Development",
        subtitle: "Unique & Scalable Solutions",
      },
      {
        iconClass: <FaShoppingCart />, // React Icon for E-Commerce Platforms
        title: "E-Commerce Platforms",
        subtitle: "Boost Online Sales",
      },
      {
        iconClass: <FaCogs />, // React Icon for CMS Integration
        title: "CMS Integration",
        subtitle: "Easy Content Management",
      },
    ],

    additionalContent:
      "Our team follows industry best practices and the latest development trends to ensure that your website is future-proof. Whether you need a corporate website, an e-commerce store, or a web application, we deliver solutions that help your business thrive in the digital world.",
  },
  {
    id: 4,
    title: "Cloud Computing Services",
    link: "cloud-computing-services",
    sectionTitle: "Why Choose Us",
    image: clouddevelopment,

    sectionSubtitle:
      "Empowering businesses with secure, scalable, and cost-effective cloud solutions.",
    sectionContent: [
      "In today’s digital world, cloud computing is essential for businesses looking to scale, innovate, and improve efficiency. We offer customized cloud solutions that align with your business objectives, providing security, flexibility, and cost-effectiveness.",
      "Our cloud solutions cover everything from infrastructure setup to data storage and disaster recovery. We help businesses transition to the cloud seamlessly, ensuring optimal performance and security at every stage.",
    ],
    icons: [
      {
        iconClass: <FaCloud />, // React Icon for Cloud Infrastructure
        title: "Cloud Infrastructure",
        subtitle: "Scalable & Reliable",
      },
      {
        iconClass: <FaDatabase />, // React Icon for Secure Storage
        title: "Secure Storage",
        subtitle: "Data Protection & Backup",
      },
      {
        iconClass: <FaShieldAlt />, // React Icon for Disaster Recovery
        title: "Disaster Recovery",
        subtitle: "Business Continuity",
      },
    ],
    additionalContent:
      "With our expertise in cloud platforms like AWS, Azure, and Google Cloud, we help businesses leverage the power of the cloud to optimize operations, reduce costs, and improve agility. Whether you need cloud migration, security enhancements, or backup solutions, we provide end-to-end support to keep your business running smoothly.",
  },
  {
    id: 5,
    title: "Artificial Intelligence Services",
    link: "artificial-intelligence-services",
    sectionTitle: "Why Choose Us",
    image: aidevelopment,

    sectionSubtitle:
      "Transforming businesses with cutting-edge AI solutions for automation and intelligence.",
    sectionContent: [
      "AI is reshaping the way businesses operate by automating tasks, improving decision-making, and enhancing customer experiences. We provide tailored AI solutions that integrate seamlessly into your existing infrastructure, ensuring tangible business impact.",
      "Whether you need advanced analytics, intelligent automation, or AI-powered customer interactions, our expertise in AI technologies like machine learning and NLP enables us to develop solutions that drive efficiency and growth.",
    ],
    icons: [
      {
        iconClass: <FaRobot />, // React Icon for Machine Learning
        title: "Machine Learning",
        subtitle: "Data-Driven Insights",
      },
      {
        iconClass: <FaComments />, // React Icon for AI Chatbots
        title: "AI Chatbots",
        subtitle: "Enhanced Customer Engagement",
      },
      {
        iconClass: <FaRegCommentDots />, // React Icon for NLP Solutions
        title: "NLP Solutions",
        subtitle: "Smart Automation",
      },
    ],
    additionalContent:
      "By leveraging AI technologies, businesses can unlock new possibilities for automation, predictive analysis, and customer engagement. We specialize in building AI-driven solutions that enhance efficiency, optimize operations, and provide a competitive edge in the digital landscape.",
  },
  {
    id: 6,
    title: "Cloud Migration Services",
    link: "cloud-migration-services",
    sectionTitle: "Why Choose Us",
    image: migrationdevelopment,

    sectionSubtitle:
      "Effortless and secure cloud migration solutions tailored to your business needs.",
    sectionContent: [
      "Moving to the cloud is a critical step for businesses seeking flexibility, scalability, and efficiency. Our cloud migration services ensure a seamless transition, minimizing risks and maximizing operational benefits.",
      "We offer end-to-end cloud migration solutions, from readiness assessment to data transfer and post-migration support, ensuring your cloud environment is optimized for success.",
    ],
    icons: [
      {
        iconClass: <FaCloud />,
        title: "Cloud Readiness",
        subtitle: "Strategic Assessment",
      },
      {
        iconClass: <FaServer />,
        title: "Secure Migration",
        subtitle: "Data & Application Transfer",
      },
      {
        iconClass: <FaTools />,
        title: "Ongoing Support",
        subtitle: "Optimization & Monitoring",
      },
    ],
    additionalContent:
      "We work with top cloud providers like AWS, Azure, and Google Cloud to ensure a smooth migration process. Our team of experts helps businesses transition to the cloud with minimal downtime, improved security, and enhanced performance, making digital transformation effortless and efficient.",
  },
];
