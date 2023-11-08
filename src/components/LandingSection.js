import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import resume from '../images/resume.pdf'

const greeting = "Hello, I am EL MEHDI BOUABBADI !";
const bio1 = "Full-Stack Developer";
const bio2 = "specialized in Next.Js and Nest.Js";
const bio3 = "Resume";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src="https://media.licdn.com/dms/image/D4D03AQFntRJeAS6ZQA/profile-displayphoto-shrink_800_800/0/1699291533661?e=1704931200&v=beta&t=yvXkEhvsRkb0cEowE3bWwP3LsQP6eL6-xlBn00JfQL4"
          size="2xl"
          name="el mehdi bouabbadi"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
        <a href={resume} download="Resume" className=" text-xl text-blue-500 hover:text-blue-700">
          {bio3}
        </a>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio2}
        </Heading>


      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;