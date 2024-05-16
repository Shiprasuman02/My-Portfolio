import { FaBars, FaGithub, FaHome, FaTimes } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { IoLogInSharp } from "react-icons/io5";
import { TbGoGame } from "react-icons/tb";
import { GiCat } from "react-icons/gi";
import foodDelivery from "../assets/FoodDelivery.jpeg";
import edunova from "../assets/img.png"





export const socialMedia = [
    {
      id: 1,
      icon: <FaGithub />,
      link:"https://github.com/Shiprasuman02"
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link:"http://www.linkedin.com/in/shipra-suman203"
    },
    {
      id: 3,
      icon: <SiGeeksforgeeks />,
      link:"https://www.geeksforgeeks.org/user/sumanshipra203/"
    },
  ];


  export  const projects = [
    {
      id: 1,
      image: edunova,
      state:"YouTube",
      title: "YouTube clone",
      link:"https://youtube-clone-ten-swart.vercel.app/",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit",
    },
    
      
    {
      id: 1,
      image: foodDelivery,
      state:"Food",
      title: "swiggy-clone",
      link:"https://swiggy-007.vercel.app/",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit",
    },
    // {
    //   id: 1,
    //   image: foodDelivery,
    //   title: "HeistINN-Heist Food Online",
    //   description:
    //     "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    // },
  
  ];


  export const moreProjects = [
    {
      id: 1,
      icon: <IoLogInSharp />,
      title: "Login-Signup",
      stack: "HTML,TailwindCSS,Reactjs",
      link:"https://login-signup24.vercel.app/"
    },
    {
      id: 1,
      icon: <GiCat />,
      title: "Random Gif Generator",
      stack: "TailwindCSS , Reactjs",
      link:"https://random-gif-generator-hazel.vercel.app/"
    },
    {
      id: 1,
      icon: <TbGoGame />,
      title: "Tic-Tae-Toe",
      stack: "HTML,CSS,Javascript",
      link:"https://tic-tac-toe-rho-sand-95.vercel.app/"
    },

  ];