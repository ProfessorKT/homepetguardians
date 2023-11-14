import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "home" },
  { title: "Services", href: "services" },
  { title: "About us", href: "about-us" },
  { title: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
      <div className="fixed w-full h-[80px] flex items-center px-4 bg-[#04A777] text-white z-8">
        <div>
          <Image
            src={Logo}
            alt=""
            style={{ width: "60px", minWidth: "60px" }}
            priority={true}
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <ul className="hidden md:flex px-4 text-xl ">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="whitespace-nowrap"
              >
                About us
              </Link>
            </li>
            <li className="!pr-0">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="pr-4 items-center hidden md:flex">
            <a className="mr-4 ml-1 h-[45px] w-[100px] justify-center items-center align-middle bg-[#03312E] flex rounded-2xl cursor-pointer">
              <p>Sign up</p>
            </a>
            <a className="h-[45px] w-[100px] justify-center items-center align-middle bg-[#03312E] flex rounded-2xl cursor-pointer">
              <p>Login</p>
            </a>
          </div>
        </div>
        <div onClick={toggleMenu} className="flex md:hidden z-10">
          <Hamburger />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 bg-[#04A777] w-full h-screen origin-top p-10 z-10"
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
                  <Hamburger />
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
    </header>
  );
};

export default Navbar;

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

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase ">
      <Link to={href} smooth={true} duration={500}>
        {title}
      </Link>
    </motion.div>
  );
};
