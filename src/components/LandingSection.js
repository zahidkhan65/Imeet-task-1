import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Myself Mohd Zahid Khan";
const bio1 = "A  Full Stack Web developer";
const bio2 = "Works at Imeet Mathura";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#FF9984"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="MOHD ZAHID KHAN"
        src="../images/my-profile.jpg"
      />
      <Heading as="h1" size="2xl">
        {greeting}
      </Heading>
      <Heading as="h3" size="sm">
        {bio1}
      </Heading>
      <Heading as="h3" size="sm">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
