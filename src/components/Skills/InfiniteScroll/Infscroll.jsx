import React from "react";
import "./Infscroll.css";

const data = [
  {
    id: 1,
    title: "HTML",
    img: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    desc: "HTML structures web content effectively.",
  },
  {
    id: 2,
    title: "CSS",
    img: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    desc: "CSS styles websites with precision.",
  },
  {
    id: 3,
    title: "JavaScript",
    img: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    desc: "Powerful flexible dynamic interactive programming language.",
  },
  {
    id: 4,
    title: "TypeScript",
    img: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    desc: "Strongly typed scalable modern JavaScript.",
  },
  {
    id: 5,
    title: "Bootstrap",
    img: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
    desc: "Responsive mobile-first front-end framework.",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    desc: "Utility-first responsive modern CSS framework.",
  },
  {
    id: 7,
    title: "React.js",
    img: "https://icon.icepanel.io/Technology/svg/React.svg",
    desc: "Powerful efficient flexible JavaScript library.",
  },
  {
    id: 8,
    title: "Redux",
    img: "https://icon.icepanel.io/Technology/svg/Redux.svg",
    desc: "Predictable state management for JavaScript.",
  },
];

const data2 = [
  {
    id: 1,
    title: "Node.js",
    img: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    desc: "JavaScript runtime for server-side development.",
  },
  {
    id: 2,
    title: "Express.js",
    img: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    desc: "Fast flexible minimal web framework.",
  },
  {
    id: 3,
    title: "Mongo DB",
    img: "	https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    desc: "Flexible, scalable, document-based NoSQL database.",
  },
  {
    id: 4,
    title: "Firebase",
    img: "	https://icon.icepanel.io/Technology/svg/Firebase.svg",
    desc: "Real-time database, authentication, cloud storage.",
  },
  {
    id: 5,
    title: "Git",
    img: "https://icon.icepanel.io/Technology/svg/Git.svg",
    desc: "Version control, collaboration, code management.",
  },
  {
    id: 6,
    title: "GitHub",
    img: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
    desc: "Powerful collaborative version control platform.",
  },
  {
    id: 7,
    title: "Postman",
    img: "	https://icon.icepanel.io/Technology/svg/Postman.svg",
    desc: "Powerful API testing and collaboration tool.",
  },
  {
    id: 8,
    title: "JWT",
    img: "https://jwt.io/img/pic_logo.svg",
    desc: "Secure token-based authentication for APIs.",
  },
  {
    id: 9,
    title: "AWS",
    img: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
    desc: "Scalable reliable secure cost-effective flexible.",
  },
];

const Infscroll = () => {
  return (
    <>
      <div className="wrapper">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`itemLeft item${index + 1}`}
            style={{
              animationDelay: `calc(30s / 8 * (8 - ${index + 1}) * -1)`,
            }}
          >
            <img className="w-14 mx-auto mt-1" src={item.img} alt={item.title} />
            <h1 className="text-xl font-semibold mt-3 text-blue-200 ">{item.title}</h1>
            <p className="mt-2 leading-1">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="wrapper">
        {data2.map((item, index) => (
          <div
            key={item.id}
            className={`itemRight item${index + 1}`}
            style={{
              animationDelay: `calc(30s / 8 * (8 - ${index + 1}) * -1)`,
            }}
          >
            <img className="w-14 mx-auto mt-1" src={item.img} alt={item.title} />
            <h1 className="text-xl font-semibold mt-3 text-blue-200 ">
              {item.title}
            </h1>
            <p className="mt-2 leading-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Infscroll;
