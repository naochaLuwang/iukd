"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [data, setData] = useState<any | null>();

  const [isLoading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

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
        const sortedNav = [...data].sort((a, b) => a.order - b.order);
        setData(sortedNav);
      });
  }, [data]);

  return (
    <motion.div
      className={`z-50 w-full h-10 bg-blue-900 hidden lg:block ${
        isSticky ? "sticky top-24 mb-14" : ""
      } ${
        pathName == "/" && !isSticky
          ? "bg-blue-900 bg-opacity-90 "
          : "bg-blue-900 bg-opacity-90"
      }`}
      initial={false}
      animate={isSticky ? "sticky" : "normal"}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      variants={{
        sticky: {
          top: "6rem",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
        normal: {
          top: "7.5rem",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="w-full px-12">
        <NavigationMenu>
          <NavigationMenuList>
            {data !== null &&
              data?.map((navlink: any) => (
                <div key={navlink.id}>
                  {navlink.sublinks.length > 0 ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`${isSticky ? "text-white" : "text-white"}`}
                      >
                        {navlink.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className={`grid w-[400px] gap-3 p-4  ${
                            navlink.isMulti === "YES"
                              ? "w-[800px] md:grid-cols-2"
                              : "grid-cols-1 md:w-[400px]"
                          }   `}
                        >
                          {navlink.sublinks
                            .sort((a: any, b: any) => a.order - b.order)
                            .map((component: any) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={`${navlink.slug}/${component.slug}`}
                              >
                                {component.subtitle}
                              </ListItem>
                            ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <Link href={navlink.slug}>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isSticky ? "text-white" : "text-white"
                          }`}
                        >
                          {navlink.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )}
                </div>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 text-lg leading-none no-underline outline-none transition-colors hover:bg-blue-800 hover:text-white  focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
