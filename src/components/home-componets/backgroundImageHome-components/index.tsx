import { chakra,  Image } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";


export const ImageHome = () => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
  return (
    <>
    
      <Image
        width={["", "", "70%"]}
        height={["", "", "70%"]}
        maxW={["", "", "480px"]}
        maxH={["", "", "480px"]}
        display={["none", "none", "flex", "none"]}
        src={require("../../imgs/Planet.png")}
        alt="Planet"
      />
      <ChakraBox
       display={["none", "none", "none", "flex"]}
        width="100%"
        animate={{
          scale: [1, 1, 1, 1, 1],
          rotate: [0, 360],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          
        }}
      >
        <Image
       
          width={["", "", "", "100%"]}
          height={["", "", "100%"]}
          maxW={["", "", "400px"]}
          maxH={["", "", "400px"]}        
          src={require("../../imgs/centerPlanet.png")}
          alt="Planet"
        />
      </ChakraBox>
     
    </>
  );
};
