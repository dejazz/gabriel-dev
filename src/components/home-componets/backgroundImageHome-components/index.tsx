import { Image } from "@chakra-ui/react";

export const ImageHome = () => {
  return (
    <>
      <Image
        width={["", "", "500px", ""]}
        height={["", "", "100%"]}
        maxH={["", "", "600px"]}
        display={["none", "none", "flex", "none"]}
        src={require("../../imgs/Planet.png")}
        alt="Planet"
      />

      <Image
        position="absolute"
        zIndex="-1"
        width={["", "", "", "70%"]}
        height={["", "", "100%"]}
        maxW={["", "", "800px"]}
        maxH={["", "", "800px"]}
        display={["none", "none", "none", "flex"]}
        src={require("../../imgs/centerPlanet.png")}
        alt="Planet"
      />
    </>
  );
};
