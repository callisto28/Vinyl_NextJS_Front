
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center border-t-2 lg:z-50 sm:z-50 text-center border-blueCC h-14">
      <footer className=" flex lg:flex-row sm:flex-row lg:text-base sm:text-xs  lg:justify-evenly sm:justify-evenly  items-center lg:w-1/2 sm:w-4/5 mt-2">

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

          <Link
            href={"https://www.sebfordev.me/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_seb.png"
              alt="Logo Seb4Dev"
              className="h-8 w-24 cursor-pointer mx-2"
            ></img>
          </Link>
        </div>
        <Link href={"/legal/mention"} className="cursor-pointer">
          Mentions légales
        </Link>
        <Link href={"/contact"} className="cursor-pointer">Contact</Link>
        <Link href={"../sitemap-0.xml"} className="cursor-pointer">
          Plan du site
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
