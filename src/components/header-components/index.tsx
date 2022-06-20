import { Flex } from "@chakra-ui/react";
import { MenuDeskTop } from "../global/menuDeskTop";
import { MenuMobile } from "../global/menuMobile";

export const Header = () => {
  return (
    <Flex w="100%" align="center" justify={["flex-end", "", "", "center"]}>
      <MenuMobile />
      <Flex w={["","","","100%"]} maxW={["","","","1100px"]} justify="center" >
        <MenuDeskTop />
      </Flex>
    </Flex>
  );
};
