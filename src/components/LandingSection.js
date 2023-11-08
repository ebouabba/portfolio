import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 

const greeting = "Hello, I am EL MEHDI BOUABBADI !"; 
const bio1 = "Full-Stack Developer"; 
const bio2 = "specialized in Next.Js and Nest.Js"; 
 
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
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
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