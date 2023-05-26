import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
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
import web7 from "../public/YUMYUM.png"
import web8 from "../public/inventory.jpg"
import web9 from "../public/plantPeace.png"

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Surohan_Maharjan_CV.pdf").then((response) => {
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
      <main className="bg-white px-10 md:px-20 lg:40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-burtons dark:text-white">
              Developed By Surohan
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
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
            <a href="https://www.instagram.com/frontendworks/">
              <AiFillInstagram />
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
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Welcome to my web design portfolio! I am a skilled and experienced
              web designer with a passion for creating visually stunning and
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
              <p className="text-gray-800 py-1">JQuery and ReactJS</p>
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
              <p className="text-gray-800 py-1">Freelancing</p>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Welcome to my web design portfolio! I am a skilled and experienced
              web designer with a passion for creating visually stunning and
              user-friendly websites. My portfolio showcases a selection of my
              recent projects, highlighting my ability to design and develop
              websites that are both beautiful and functional.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including programming and
              designing.
            </p>
          </div>

          {/* Programiing */}
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            Some website cloning I did
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>

          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            Some UI designs
          </p>    
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3  flex-1">
            <Link href={'https://www.figma.com/file/is1cNmBRjvDAjy7GEpCqLg/Food-ordering-app?node-id=0%3A1&t=Qe1xw1eGHeJHKFO9-1'}>
            <Image
                src={web7}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </Link>
              
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="" >
              <Image
                src={web8}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
              </Link>

            </div>
          
            <div className="basis-1/3  flex-1">
            <Link href={'https://www.figma.com/file/is1cNmBRjvDAjy7GEpCqLg/Food-ordering-app?node-id=0%3A1&t=Qe1xw1eGHeJHKFO9-1'}>
            <Image
                src={web9}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </Link>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
