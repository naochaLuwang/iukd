"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { CSSProperties } from "react";
import { MotionStyle } from "framer-motion";

interface NavLink {
  id: string;
  title: string;
  slug: string;
  order: number;
  status: string;
  pageType: string;
  userId: string;
  content: string;
  isMulti: "YES" | "NO";
  createdAt: string;
  updatedAt: string;
  sublinks: Sublink[];
}

interface Sublink {
  id: string;
  linkId: string;
  userId: string;
  title: string;
  subtitle: string;
  slug: string;
  order: number;
  status: string;
  content: string;
  pageType: string;
  createdAt: string;
  updatedAt: string;
}

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<NavLink[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [openSublinks, setOpenSublinks] = useState<string[]>([]);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/links`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const toggleSublinks = (linkId: string) => {
    if (isOpenSublink(linkId)) {
      setOpenSublinks(openSublinks.filter((id) => id !== linkId));
    } else {
      setOpenSublinks([...openSublinks, linkId]);
    }
  };

  const isOpenSublink = (linkId: string) => {
    return openSublinks.includes(linkId);
  };

  const slidingComponentStyle: MotionStyle | CSSProperties = {
    right: 0,
    height: "100%",
    width: "100%",

    transition: "transform 0.3s ease-in-out",
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    overflowY: "hidden",
    maxHeight: "100vh",
    zIndex: 50,
  };

  return (
    <div
      className={`z-50 px-2   w-full h-24 pt-3 overflow-hidden bg-white shadow-sm  lg:hidden ${
        isSticky ? "  transition-all duration-300 ease-in-out sticky top-0" : ""
      }`}
    >
      <div className="flex items-center w-full ">
        <Link href="/">
          <div className="relative flex-shrink-0 w-20 h-20 ">
            <Image src="/iukdlogon.png" alt="logo" fill />
          </div>
        </Link>

        <div className="relative flex-shrink-0 w-48 h-20 bg-white rounded-xl">
          <Image
            src="/iukdspelling.png"
            alt="logo"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>

        <div className="">
          <div
            className={` font-semibold  ${isOpen ? "open" : "closed"}`}
            onClick={toggleSlide}
          >
            {isOpen ? (
              <AiOutlineCloseSquare className="w-10 h-10 ml-10 text-teal-800" />
            ) : (
              <GiHamburgerMenu className="w-8 h-10 ml-10 text-teal-800" />
            )}
          </div>
          <motion.div
            style={slidingComponentStyle}
            initial={{ translateX: "100%" }}
            animate={{ translateX: isOpen ? "0%" : "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${
              isSticky ? "fixed top-24 h-[100vh] w-full" : "fixed top-36"
            } h-[100vh] w-full bg-gradient-to-br from-teal-600 to-teal-900`}
          >
            <nav className="relative z-50 px-4 py-2">
              <AnimatePresence>
                {data && (
                  <motion.ul>
                    {data.map((link) => (
                      <motion.li
                        key={link.id}
                        className="mt-5 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {link.sublinks && link.sublinks.length > 0 ? (
                          <div
                            onClick={() => toggleSublinks(link.id)}
                            className="text-sm font-semibold"
                          >
                            {isOpenSublink(link.id)
                              ? `${link.title}-`
                              : `${link.title}+`}
                          </div>
                        ) : (
                          <Link
                            href={link.slug}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.title}
                          </Link>
                        )}
                        <AnimatePresence>
                          {isOpenSublink(link.id) && (
                            <motion.ul
                              className="ml-4"
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                            >
                              {link.sublinks.map((sublink) => (
                                <motion.li
                                  key={sublink.id}
                                  className="mt-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <Link
                                    href={`${link.slug}/${sublink.slug}`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <p>{sublink.title}</p>
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
