import { Flex } from "@chakra-ui/react";
import { MenuDeskTop } from "../../components/global/menuDeskTop";
import { MenuMobile } from "../../components/global/menuMobile";
import { ImageHome } from "../../components/home-componets/backgroundImageHome-components";
import { HomeContent } from "../../components/home-componets/home-content-components";

export const HomePage = () => {
  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      align={["center", "center", ""]}
      justify={["", "", "flex-start", "center"]}
    >
      <MenuMobile />
      <Flex
        w="100%"
        maxW="1200px"
        h={["","","100%"]}
        align={["center", "center", ""]}
        justify={["center", "center", "", "space-between"]}
      >
        <HomeContent />
        <ImageHome />
        <MenuDeskTop />
      </Flex>
    </Flex>
  );
};
