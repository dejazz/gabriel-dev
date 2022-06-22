import { Flex, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MenuDeskTop } from "../global/menuDeskTop";
import { MenuMobile } from "../global/menuMobile";

export const Header = () => {
  const history = useHistory();
  return (
    <Flex
      w="100%"
      h="100%"
      maxH="150px"
      align="center"
      justify={["center"]}
      bg={"#101010"}
      boxShadow={"1px 1px 5px 1px #434343ce"}
    >
      <Heading
        onClick={() => history.push("/")}
        cursor="pointer"
        variant={["mobile", "primary", "primary"]}
      >
        &#60;Gabriel/Dev&#62;
      </Heading>
      <MenuMobile />
      <MenuDeskTop />
    </Flex>
  );
};
