import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillBehanceSquare,
} from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/sumar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import webMeitu from "../public/meitu.png";
// import webVideo from "./public/video.mp4";

import web7 from "../public/YUMYUM.png";
import web8 from "../public/inventory.jpg";
import web9 from "../public/ParkOpen.jpg";
import web10 from "../public/PlantPeace.png";
import web11 from "../public/Dashboard.png";
import ui5 from "../public/Highland.png";
import poster1 from "../public/MelonPoster.png";
import poster2 from "../public/SojuPoster.png";
import poster3 from "../public/PinkFrappe.png";
import poster4 from "../public/Dew.png";
import poster5 from "../public/Mawe.png";
import poster6 from "../public/Monster.png";
import poster7 from "../public/CoconutWater.png";
import poster8 from "../public/Beer.png";
import poster9 from "../public/dublight.png";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const webMedia = [
    {
      type: "image",
      src: web1, // Replace this with the new image source
      href: "https://github.com/sazmhzn/HTML-CSS-JS/tree/new-project-1",
      alt: "New Web Project 1",
    },
    {
      type: "image",
      src: web2,
      href: "https://github.com/sazmhzn/HTML-CSS-JS/tree/new-project-2",
      alt: "New Web Project 2",
    },
    {
      type: "image",
      src: web3,
      href: "https://github.com/sazmhzn/HTML-CSS-JS/tree/new-project-3",
      alt: "New Web Project 3",
    },
    {
      type: "image",
      src: web4,
      href: "https://github.com/sazmhzn/HTML-CSS-JS/tree/new-project-4",
      alt: "New Web Project 4",
    },
    {
      type: "image",
      src: web5,
      href: "https://github.com/sazmhzn/HTML-CSS-JS/tree/new-project-5",
      alt: "New Web Project 5",
    },
    {
      type: "image",
      src: web6,
      href: "https://github.com/sazmhzn/HTML-CSS-JS/tree/new-project-6",
      alt: "New Web Project 6",
    },
    {
      type: "image",
      src: webMeitu,
      href: "https://meitupaint.com/src/index.html",
      alt: "Meitupaints",
    },
    {
      type: "video",
      src: "./video.mp4",
      href: "https://palettepop.netlify.app",
      alt: "New Web Project 7",
    },
  ];

  const uiImages = [
    {
      src: web7,
      href: "https://www.figma.com/community/file/1080510531812970328/Food-ordering-app",
      alt: "YUMYUM cafe",
    },
    {
      src: web8,
      href: "https://www.figma.com/community/file/1127492454021442790/Inventory-Management-system",
      alt: "Inventory system",
    },
    {
      src: web9,
      href: "https://www.figma.com/community/file/1211195485606089534/OpenPark",
      alt: "ParkOpen UI",
    },
    {
      src: web10,
      href: "https://www.figma.com/community/file/1241799969703495135/PlantPeace",
      alt: "Plantz",
    },
    {
      src: web11,
      href: "https://www.figma.com/community/file/1241799969703495135/PlantPeace",
      alt: "Attendance System",
    },
    {
      src: ui5,
      href: "https://www.figma.com/community/file/1391965654620229866/travelling-app",
      alt: "Travel Booking",
    },
  ];

  const posterImages = [
    {
      src: poster1,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster1",
    },
    {
      src: poster2,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster2",
    },
    {
      src: poster3,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster3",
    },
    {
      src: poster4,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster4",
    },
    {
      src: poster5,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster5",
    },
    {
      src: poster6,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster6",
    },
    {
      src: poster7,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster6",
    },
    {
      src: poster8,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster6",
    },
    {
      src: poster9,
      href: "https://www.instagram.com/ghinlagdo.design/",
      alt: "poster6",
    },
  ];

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Surohan_Maharjan_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Surohan_Maharjan_CV.pdf";
        alink.click();
      });
    });
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Surohan Maharjan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-20 md:px-20 lg:40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-burtons dark:text-white">
              Developed By Surohan
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl  dark:text-white"
                />
              </li>
              <li onClick={onButtonClick}>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Surohan Maharjan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Freelancer providing services for programming and needs. Join me
              down below and let's get craking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/sazmhzn">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/suron-maharjan/">
              {" "}
              <AiFillLinkedin />
            </a>
            <a href="https://www.behance.net/suronmaharjan">
              <AiFillBehanceSquare />
            </a>
            <a href="https://www.figma.com/@saz5">
              {" "}
              <CgFigma />{" "}
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={avatar} className="object-cover" />
          </div>
        </section>

        {/* Footer section */}
        <section>
          <div>
            <h3 className="text-3xl font-bold py-4 text-teal-600 dark:text-white">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Welcome to my design portfolio! I am a skilled and experienced web
              designer with a passion for creating visually stunning and
              user-friendly websites. My portfolio showcases a selection of my
              recent projects, highlighting my ability to design and develop
              websites that are both beautiful and functional.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including programming and
              designing.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs foolowing core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend developer
              </h3>
              <p className="py-2">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className="text-gray-800 py-1">HTML/CSS and JavaSript</p>
              <p className="text-gray-800 py-1">ReactJS and TypeScript</p>
              <p className="text-gray-800 py-1">Sass and Tailwindcss</p>
              <p className="text-gray-800 py-1">Git and Github</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Mentor</h3>
              <p className="py-2">
                I genuinely care about people, and love helping fellow designers
                work on their craft.
              </p>
              <h4 className="py-4 text-teal-600">Experiences I draw from:</h4>
              <p className="text-gray-800 py-1">UI/UX</p>
              <p className="text-gray-800 py-1">Graphic Designing</p>
              <p className="text-gray-800 py-1">Web Development</p>
            </div>
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl font-bold py-4 text-teal-600 dark:text-white py-1">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Welcome to my web design portfolio! I am a skilled and experienced
              web designer with a passion for creating visually stunning and
              user-friendly websites. My portfolio showcases a selection of my
              recent projects, highlighting my ability to design and develop
              websites that are both beautiful and functional.
            </p>
            <p className="text-md py-0 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including programming and
              designing.
            </p>
          </div>

          {/* Programiing */}
          <p className="text-7xl text-center mt-6 font-semibold text-gray-800 dark:text-white">
            Frontend Projects
          </p>
          <div className="columns-3 space-y-4 gap-5 mt-8 mb-10 ">
            {webMedia.map((media, index) => (
              <div key={index} className="w-full overflow-hidden rounded-lg">
                <Link href={media.href} target="_blank">
                  {media.type === "image" ? (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      className="rounded-lg object-cover transition ease-in-out delay-150 hover:scale-150"
                      width={"100%"}
                      height={"100%"}
                    />
                  ) : (
                    <video
                      src={media.src}
                      autoPlay="true"
                      className="rounded-lg aspect-square object-cover transition ease-in-out delay-150"
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-7xl my-6 text-center mt-6 font-semibold text-gray-800 dark:text-white">
            UI Projects
          </p>
          <div className="columns-3 gap-5">
            {uiImages.map((image, index) => (
              <div key={index} className="overflow-hidden text-center my-5">
                <Link href={image.href} className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className="text-neutral-600 font-semibold">
                    {" "}
                    {image.alt}{" "}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* for graphic designing projects */}
          <p className="text-7xl text-center mt-6 font-semibold text-gray-800 dark:text-white">
            Graphics Design
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {posterImages.map((item) => {
              return (
                <div className="basis-1/4 flex-1">
                  <Link href={"https://www.instagram.com/ghinlagdo.design/"}>
                    <Image
                      src={item.src}
                      className="rounded-lg object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
