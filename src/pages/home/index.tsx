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
      <Flex>
        <MenuDeskTop />
      </Flex>
      <Flex
        w="100%"
        maxW="1100px"
        h={["", "", "100%"]}
        direction="column"
        align={["center", "center", ""]}
        justify={["center", "center", "", "center"]}
      >
        <Flex
          w="100%"
          maxW="1100px"
          h={["", "", "100%"]}
          align={["center", "center", ""]}
          justify={["center", "center", "", "center"]}
        >
          <HomeContent />
          <ImageHome />
        </Flex>
      </Flex>
    </Flex>
  );
};
