import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {ApiContext} from '../components/ApiContext.js';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: khanmohdzahid64@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/zahidkhan65",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mohd-zahid-khan-a4b031247",
  },
  
 
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        headerRef.current.style.transform = "translateY(0)";
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={20}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a key={social.url} href={social.url } target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>
                MY WORK
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                CONTACT ME
              </a>
              <a href="#ApiContext" onClick={handleClick("ApiContext")}>
                MY SKILLS
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
