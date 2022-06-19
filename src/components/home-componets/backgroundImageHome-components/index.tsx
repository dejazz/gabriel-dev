import { chakra, Image } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export const ImageHome = () => {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
  return (
    <>
    
      <Image
        width={["", "", "100%"]}
        height={["", "", "70%"]}
        maxW={["", "", "600px"]}
        maxH={["", "", "600px"]}
        display={["none", "none", "flex", "none"]}
        src={require("../../imgs/Planet.png")}
        alt="Planet"
      />
      <ChakraBox
        width="100%"
        display={["none", "none", "none", "flex"]}
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
          zIndex="-1"
          width={["", "", "", "100%"]}
          height={["", "", "100%"]}
          maxW={["", "", "500px"]}
          maxH={["", "", "500px"]}
          display={["none", "none", "none", "flex"]}
          src={require("../../imgs/centerPlanet.png")}
          alt="Planet"
        />
      </ChakraBox>
    </>
  );
};
