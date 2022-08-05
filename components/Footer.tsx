
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center border-t-2 lg:z-50 sm:z-50 text-center border-blueCC h-20">
      <span className='lg:text-sm sm:text-xs lowercase font-medium first-letter:uppercase first-letter:text-base first-letter:font-bold px-2 pt-2'>&quot;La vie sans musique est tout simplement une erreur, une fatigue, un exil.&quot;&nbsp;<span className='text-xxs first-letter:uppercase'>Friedrich Nietzsche</span></span>
      
      <footer className=" flex lg:flex-row sm:flex-row lg:text-base sm:text-xs  lg:justify-evenly sm:justify-evenly  items-center lg:w-1/2 sm:w-4/5 mt-2">
      {/* <div className="flex flex-row justify-center items-center  mb-2"> */}
          <Link href="https://www.facebook.com/Vinyl33T" >
            <a
              href="https://www.facebook.com/Vinyl33T"
              target="_blank"
              rel="noopener noreferrer"              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#00abfb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
          </Link>
          <Link href="https://www.instagram.com/vinyle33t/">
            <a
              href="https://www.instagram.com/vinyle33t/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#ff4500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
          </Link>
        {/* </div> */}
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-copyright "
            width="14"
            height="14"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M14.5 9a3.5 4 0 1 0 0 6" />
          </svg>

          {/* <Link
            href={"https://www.sebfordev.me/"}
            target="_blank"
            rel="noopener noreferrer"
          > */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_seb.png"
              alt="Logo Seb4Dev"
              className="h-8 w-24 mx-2"
            ></img>
          {/* </Link> */}
        </div>
        <Link href={"/legal/mention"} className="cursor-pointer">
          Mentions légales
        </Link>
        <Link href={"/contact"} className="cursor-pointer">Contact</Link>
        <a href={"../sitemap-0.xml"} className="cursor-pointer">
          Plan du site
        </a>
      </footer>
    </div>
  );
};

export default Footer;
