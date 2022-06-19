import {Image } from "@chakra-ui/react";

export const ImageHome = () => {
  return (
    <>
      <Image
        width={["", "", "70%"]}
        height={["", "", "70%"]}
        maxW={["", "", "600px"]}
        maxH={["", "", "600px"]}
        display={["none", "none", "flex", "none"]}
        src={require("../../imgs/Planet.png")}
        alt="Planet"
      />

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
    </>
  );
};
