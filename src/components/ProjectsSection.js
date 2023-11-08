import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "WEBSERV", 
   description: 
     `Simply it is a software application that runs on a computer and listens for
     incoming requests from clients over the internet or a local network When a client
     such as a web browser sends a request for a webpage the web server receives
     the request processes it and sends back the requested webpage as a response.
     `, 
   getImageSrc: () => require("../images/img1.jpg"), 
 }, 
 { 
   title: "INCEPTION", 
   description: 
     `Inception is a project aimed at setting up a WordPress website within a Docker container.
     The setup includes integrating a MariaDB database for efficient data storage and retrieval. By
     utilizing Docker, the project aims to streamline deployment and management processes,
     making it easier to maintain a consistent and isolated development environment.`, 
   getImageSrc: () => require("../images/img2.jpg"), 
 }, 
 { 
   title: "CUB3D", 
   description: 
     `Cub3D is a project that challenges students to build a 3D graphics engine
     from scratch using the C programming language. The primary objective
     is to render a 3D-like environment on a 2D screen, creating the illusion of depth and movement.`, 
   getImageSrc: () => require("../images/img3.png"), 
 }, 
 { 
   title: "FT_TRANSCENDENCE", 
   description:
    `This project is about creating a website for the mighty Pong contest!
    with live chat and authentication with Nextjs, Nestjs Frameworks, and PostgreSQL
    database`,
   getImageSrc: () => require("../images/img4.webp"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;