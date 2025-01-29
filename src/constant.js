import {
  FaChartLine,
  FaCloud,
  FaCloudUploadAlt,
  FaCode,
  FaCogs,
  FaGamepad,
  FaHandsHelping,
  FaLightbulb,
  FaMobile,
  FaPaintBrush,
  FaRobot,
  FaShieldAlt,
  FaUserCheck,
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
export const companyDetails = {
  name: "MANYA AI",
  email: "surendhar@shreemanya.in",
  phone1: "+91-8300609627",
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
  {
    id: 7,
    title: "Game Development",
    description:
      "Develop high-quality, engaging games for mobile, desktop, and console platforms.",
    content:
      "Our game development team creates immersive and interactive experiences for players across multiple platforms. Whether it's mobile games, PC games, or console games, we deliver engaging gameplay with stunning graphics and optimized performance.",
    icon: <FaGamepad />,
    points: [
      {
        heading: "Mobile Game Development",
        description:
          "We specialize in developing mobile games that engage users and are optimized for iOS and Android devices.",
      },
      {
        heading: "Console & PC Games",
        description:
          "From concept to launch, we develop games for console and PC platforms with attention to performance, quality, and user experience.",
      },
      {
        heading: "Game Maintenance & Updates",
        description:
          "We provide ongoing support, updates, and improvements to ensure your game stays relevant and performs at its best.",
      },
    ],
  },
  {
    id: 8,
    title: "Robotic Process Automation",
    description:
      "Automate repetitive tasks and workflows to boost productivity and reduce errors.",
    content:
      "Our RPA solutions automate manual, repetitive tasks, enabling your business to streamline operations and reduce human error. From automating customer support to back-office processes, we can help you save time and costs.",
    icon: <FaRobot />,
    points: [
      {
        heading: "Business Process Automation",
        description:
          "Automate key business processes to improve efficiency and reduce costs.",
      },
      {
        heading: "Customer Support Automation",
        description:
          "Use RPA to streamline and automate customer support functions, improving response times and satisfaction.",
      },
      {
        heading: "Data Entry Automation",
        description:
          "Automate data entry tasks to reduce human error and speed up workflows.",
      },
    ],
  },
  {
    id: 9,
    title: "Blockchain Development",
    description:
      "Create secure, decentralized applications and platforms using blockchain technology.",
    content:
      "Blockchain technology can transform your business by enabling secure, transparent, and decentralized systems. We offer blockchain development services to create custom solutions, smart contracts, decentralized applications (dApps), and cryptocurrency solutions.",
    icon: <SiHiveBlockchain />,
    points: [
      {
        heading: "Custom Blockchain Solutions",
        description:
          "Build decentralized, secure blockchain-based applications tailored to your needs.",
      },
      {
        heading: "Smart Contracts",
        description:
          "Implement self-executing contracts that automatically enforce the terms of an agreement.",
      },
      {
        heading: "Cryptocurrency Solutions",
        description:
          "Create digital currencies and secure wallets for safe transactions.",
      },
    ],
  },
  {
    id: 10,
    title: "Data Science Services",
    description:
      "Analyze and visualize data to make informed decisions and drive business insights.",
    content:
      "Our data science services help you unlock the value of your data. From predictive analytics to data visualizations, we help you make data-driven decisions that will accelerate your business growth.",
    icon: <FaChartLine />,
    points: [
      {
        heading: "Data Analytics & Visualization",
        description:
          "Use advanced analytics to transform data into actionable insights that drive growth.",
      },
      {
        heading: "Predictive Analytics",
        description:
          "Leverage historical data to predict trends and make better decisions.",
      },
      {
        heading: "Custom Data Science Solutions",
        description:
          "Develop tailored data science models to address your unique business needs.",
      },
    ],
  },
  {
    id: 11,
    title: "Natural Language Processing (NLP) Services",
    description:
      "Harness the power of NLP to analyze and understand human language, enabling smarter interactions and automation.",
    content:
      "Natural Language Processing (NLP) helps computers understand, interpret, and generate human language. Our NLP services provide solutions that enhance user experiences by enabling machines to understand text, speech, and sentiment. Whether it’s for chatbots, content categorization, or sentiment analysis, our NLP solutions are tailored to fit your business needs.",
    icon: <VscServerProcess />,
    points: [
      {
        heading: "Text Analytics & Sentiment Analysis",
        description:
          "Analyze customer feedback, social media posts, and other text-based data to understand sentiment and improve decision-making.",
      },
      {
        heading: "Chatbots & Virtual Assistants",
        description:
          "Leverage NLP to create intelligent chatbots and virtual assistants that understand and respond to natural language queries.",
      },
      {
        heading: "Speech Recognition & Processing",
        description:
          "Convert speech into text and enable voice commands for smarter applications and enhanced user experiences.",
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
