import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

/* The `navLinks` constant is an array of objects that represents the navigation links in the Navbar
component. Each object in the array has two properties: `title` and `href`. */
const navLinks = [
  { title: "Home", href: "home" },
  { title: "Services", href: "services" },
  { title: "About us", href: "about-us" },
  { title: "Contact", href: "contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    /**
     * This function handles scrolling and updates the active link based on the current scroll
     * position.
     */
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /* The line `const [open, setOpen] = useState(false);` is using the `useState` hook from React to
  create a state variable called `open` and a corresponding setter function called `setOpen`. The
  initial value of the `open` state variable is `false`. This state variable is used to control the
  visibility of the mobile menu in the Navbar component. When `open` is `true`, the mobile menu is
  displayed, and when `open` is `false`, the mobile menu is hidden. The `setOpen` function is used
  to update the value of the `open` state variable. */
  const [open, setOpen] = useState(false);

  /* The code `const pathname = usePathname();` is using the `usePathname` hook from the
 `next/navigation` package to get the current pathname of the URL. */
  const pathname = usePathname();

  /* The `isSignupOrLoginPage` constant is a boolean variable that checks if the current `pathname` is
  equal to "/sign-in" or "/sign-up". It is used to determine if the user is on the sign-in or
  sign-up page, and it is used to conditionally render certain elements in the Navbar component. */
  const isSignupOrLoginPage =
    pathname === "/sign-in" || pathname === "/sign-up";

  /* The line `const isSignUpPage = pathname === "/sign-up";` is checking if the current `pathname`
  variable is equal to "/sign-up". It assigns the boolean value `true` to the `isSignUpPage`
  constant if the condition is true, and `false` otherwise. This constant is used to conditionally
  render certain elements in the Navbar component based on whether the user is on the sign-up page
  or not. */
  const isSignUpPage = pathname === "/sign-up";

  /* The above code is checking if the current pathname is equal to "/sign-in" and assigning the result
  to the variable isSignInPage. */
  const isSignInPage = pathname === "/sign-in";
  const isHomePage = pathname === "/";

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
    <header className="h-[70px] fixed w-full">
      <div className="fixed w-full h-[70px] flex items-center px-4 bg-jade text-white z-10">
        <div>
          <Image
            src={Logo}
            alt=""
            style={{ width: "55px", minWidth: "55px" }}
            priority={true}
          />
        </div>
        <div className="flex justify-between w-full items-center">
          {isSignupOrLoginPage && (
            <Link href="/" className="p-4 block text-xl">
              <div className="flex items-center nav-link relative pb-2 -mb-2">
                <FiArrowLeft className="mr-1 text-2xl leading-none" />
                <span>Return to Home</span>
              </div>
            </Link>
          )}

          <ul className="hidden md:flex px-4 text-xl ">
            {!isSignupOrLoginPage && (
              <>
                <li>
                  {isSignupOrLoginPage ? (
                    <Link href="/">Return to Home</Link>
                  ) : (
                    <LinkScroll
                      to="home"
                      smooth={true}
                      duration={500}
                      className="nav-link relative block pb-1"
                      spy={true}
                      activeClass="active"
                    >
                      Home
                    </LinkScroll>
                  )}
                </li>
                <li>
                  <LinkScroll
                    to="services"
                    smooth={true}
                    duration={500}
                    className="nav-link relative block pb-1"
                    spy={true}
                    activeClass="active"
                  >
                    Services
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    to="about-us"
                    smooth={true}
                    duration={500}
                    className="whitespace-nowrap nav-link relative block pb-1"
                    spy={true}
                    activeClass="active"
                  >
                    About us
                  </LinkScroll>
                </li>
                <li className="!pr-0">
                  <LinkScroll
                    to="contact"
                    href="/"
                    smooth={true}
                    duration={500}
                    className="nav-link relative block pb-1"
                    spy={true}
                    activeClass="active"
                  >
                    Contact
                  </LinkScroll>
                </li>
              </>
            )}
          </ul>
          <div className="items-center hidden md:flex">
            <SignedOut>
              <>
                {!isSignUpPage && (
                  <Link
                    href="/sign-up"
                    className={`relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-dark-green rounded-full hover:bg-almond group ${
                      !isSignInPage ? "mr-4" : ""
                    }`}
                  >
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-almond rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black whitespace-nowrap">
                      Sign-Up
                    </span>
                  </Link>
                )}
                {!isSignInPage && (
                  <Link
                    href="/sign-in"
                    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-dark-green rounded-full hover:bg-almond group"
                  >
                    <span class=" absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-almond rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black whitespace-nowrap">
                      Sign-In
                    </span>
                  </Link>
                )}
              </>
            </SignedOut>
            {!isHomePage ? (
              <SignedIn>
                <Link href="profile" className="mr-4 text-lg">
                  Profile
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-[38px] h-[38px] rounded-full",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </SignedIn>
            ) : (
              <SignedIn>
                <Link href="/dashboard">Return to Home</Link>
              </SignedIn>
            )}
          </div>
          <div
            className={`items-center md:hidden flex ${
              pathname === "/" ? "hidden" : ""
            }`}
          >
            <SignedOut>
              <>
                {!isSignUpPage && (
                  <Link
                    href="/sign-up"
                    className="h-[45px] w-[100px] justify-center items-center align-middle bg-dark-green flex rounded-2xl cursor-pointer"
                  >
                    Sign up
                  </Link>
                )}
                {!isSignInPage && (
                  <Link
                    href="/sign-in"
                    className="h-[45px] w-[100px] justify-center items-center align-middle bg-dark-green flex rounded-2xl cursor-pointer"
                  >
                    Sign in
                  </Link>
                )}
              </>
            </SignedOut>
          </div>
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
              className="fixed left-0 top-0 bg-jade w-full h-screen origin-top p-10 z-50"
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
                          toggleMenu={toggleMenu}
                        />
                      </div>
                    );
                  })}
                </motion.div>
                <div className="flex w-full justify-center items-center">
                  <Link href="sign-up" onClick={toggleMenu}>
                    <div className="h-[60px] w-[150px] mr-3 text-white justify-center items-center align-middle bg-dark-green flex rounded-3xl cursor-pointer text-xl">
                      Sign up
                    </div>
                  </Link>
                  <Link href="sign-in" onClick={toggleMenu}>
                    <div className="h-[60px] w-[150px] ml-3 text-white justify-center items-center align-middle bg-dark-green flex rounded-3xl cursor-pointer text-xl">
                      Sign in
                    </div>
                  </Link>
                </div>
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
      duration: 0.5,
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
const MobileNavLink = ({ title, href, toggleMenu }) => {
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase ">
      <LinkScroll
        to={href}
        href={href}
        smooth={true}
        duration={500}
        className="cursor-pointer"
        onClick={handleClick}
      >
        {title}
      </LinkScroll>
    </motion.div>
  );
};
