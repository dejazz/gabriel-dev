import { Flex } from "@chakra-ui/react";
import { ContactContent } from "../../components/contact-components/contacts-content-components";
import { MenuDeskTop } from "../../components/global/menuDeskTop";
import { MenuMobile } from "../../components/global/menuMobile";
import { ImageHome } from "../../components/home-componets/backgroundImageHome-components";

export const ContactPage = () => {
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
          <ContactContent />
          <ImageHome />
        </Flex>
      </Flex>
    </Flex>
  );
};
