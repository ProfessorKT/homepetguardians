// "use client";

import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

/* The `navLinks` constant is an array of objects that represents the navigation links in the Navbar
component. Each object in the array has two properties: `title` and `href`. */
const navLinks = [
  { title: "Home", href: "home" },
  { title: "Services", href: "services" },
  { title: "About us", href: "about-us" },
  { title: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isSignupOrLoginPage = ["/Signup/Signup", "/Login/Login"].includes(
    router.pathname
  );

  /**
   * The toggleMenu function toggles the value of the open state variable.
   */
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  /* The `menuVars` constant is an object that defines the animation variants for the menu in the
  Navbar component. It has three properties: `initial`, `animate`, and `exit`. */
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  /* The `containerVars` constant is an object that defines the animation variants for the container of
  the mobile navigation links in the Navbar component. */
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <div className="fixed w-full h-[70px] flex items-center px-4 bg-[#04A777] text-white z-10">
        <div>
          <Image
            src={Logo}
            alt=""
            style={{ width: "55px", minWidth: "55px" }}
            priority={true}
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <ul className="hidden md:flex px-4 text-xl ">
            <li>
              {isSignupOrLoginPage ? (
                <Link href="/">Return to Home</Link>
              ) : (
                <LinkScroll to="home" smooth={true} duration={500}>
                  Home
                </LinkScroll>
              )}
            </li>
            {!isSignupOrLoginPage && (
              <>
                <li>
                  <LinkScroll to="services" smooth={true} duration={500}>
                    Services
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    to="about-us"
                    smooth={true}
                    duration={500}
                    className="whitespace-nowrap"
                  >
                    About us
                  </LinkScroll>
                </li>
                <li className="!pr-0">
                  <LinkScroll to="contact" smooth={true} duration={500}>
                    Contact
                  </LinkScroll>
                </li>
              </>
            )}
          </ul>
          {!isSignupOrLoginPage && (
            <div className="items-center hidden md:flex">
              <Link
                href="/Signup/Signup"
                className="mr-4 ml-1 h-[45px] w-[100px] justify-center items-center align-middle bg-[#03312E] flex rounded-2xl cursor-pointer"
              >
                Sign up
              </Link>
              <Link
                className="h-[45px] w-[100px] justify-center items-center align-middle bg-[#03312E] flex rounded-2xl cursor-pointer"
                href="/Login/Login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
        {!isSignupOrLoginPage && (
          <div onClick={toggleMenu} className="flex md:hidden z-30">
            <Hamburger toggled={open} />
          </div>
        )}
      </div>
      {!isSignupOrLoginPage && (
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 bg-[#04A777] w-full h-screen origin-top p-10 z-20"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Image
                    src={Logo}
                    alt=""
                    style={{ width: "60px", minWidth: "60px" }}
                    priority={true}
                  />
                  <p
                    className="cursor-pointer text-3xl justify-center items-center flex text-white"
                    onClick={toggleMenu}
                  >
                    <Hamburger toggled={open} />
                  </p>
                </div>

                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center items-center gap-8"
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden text-white">
                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                          key={index}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Navbar;

/* The `mobileLinkVars` constant is an object that defines the animation variants for the mobile
navigation links in the Navbar component. */
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

/**
 * The MobileNavLink function returns a div element with a link inside, using the title and href
 * provided as props.
 * @returns The MobileNavLink component is returning a div element with the motion.div component from
 * the Framer Motion library. Inside the motion.div, there is a Link component from the React Router
 * library, which is wrapped in a div element. The Link component is rendered with the provided title
 * as its content.
 */
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase ">
      <LinkScroll
        to={href}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        {title}
      </LinkScroll>
    </motion.div>
  );
};
