import {
  IoCode,
  IoPhonePortrait,
  IoCloud,
  IoShieldCheckmark,
} from "react-icons/io5";
export const testimonialData = [
  {
    postId: 1,
    image: "../../../image/p1.jpg",
    detail: { name: "Amina Yusuf" },
    title: "Project Manager",
    content:
      "Working with this tech company has been a game-changer. They built a flawless web app for our business, and the support is outstanding.",
  },
  {
    postId: 2,
    image: "../../../image/p2.jpg",
    detail: { name: "Mulugeta Bekele" },
    title: "Software Engineer",
    content:
      "Their mobile app development skills are top-notch. The team delivered exactly what we needed, and the app is performing flawlessly.",
  },
  {
    postId: 3,
    image: "../../../image/p3.jpg",
    detail: { name: "Fatima Abdi" },
    title: "IT Consultant",
    content:
      "The cybersecurity services provided by this company have greatly improved our data security. We now feel much more secure and prepared against threats.",
  },
  {
    postId: 4,
    image: "../../../image/p4.jpg",
    detail: { name: "Tariku Getachew" },
    title: "Business Owner",
    content:
      "Their expertise in web development is unmatched. The website they created for us is both beautiful and functional, driving more traffic and engagement.",
  },
];

export const servicesData = [
  {
    title: "Static Web Development",
    content: "Build static and responsive websites",
    imgSrc: "../../../image/web.jpg",
  },
  {
    title: "Mobile App Development",
    content: "Android & iOS apps with quality performance",
    imgSrc: "../../../image/app.jpg",
  },
  {
    title: "Web App Development",
    content: "Develop responsive web applications",
    imgSrc: "../../../image/webS.jpg",
  },
  {
    title: "Cybersecurity Services",
    content: "Secure your data | Cybersecurity Services ",
    imgSrc: "../../../image/cyber.jpg",
  },
];

export const servicesContentData = [
  {
    icon: <IoCode />,
    content: "Crafting responsive static websites.",
  },
  {
    icon: <IoPhonePortrait />,
    content: "Building Android & iOS mobile apps.",
  },
  {
    icon: <IoCloud />,
    content: "Developing dynamic web applications.",
  },
  {
    icon: <IoShieldCheckmark />,
    content: "Providing robust cybersecurity solutions.",
  },
];
