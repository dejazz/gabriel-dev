import { Flex, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MenuDeskTop } from "../global/menuDeskTop";
import { MenuMobile } from "../global/menuMobile";

export interface Iheader{
  home: boolean
}
export const Header = ({home}:Iheader) => {
  const history = useHistory();
  return (
    <Flex
      w="100vw"
      h="80px"
      align="center"
      justify={["space-around"]}
      bg={"#101010"}
      boxShadow={"1px 1px 5px 1px #434343ce"}
    >
      <Flex w="100%" maxW="1100px" align="center" justify={["space-around"]}>
        <Heading
          onClick={() => history.push("/")}
          cursor="pointer"
          variant={["mobile", "primary", "primary"]}
        >
          &#60;Gabriel/Dev&#62;
        </Heading>
        <MenuMobile home={home} />
        <MenuDeskTop home={home}/>
      </Flex>
    </Flex>
  );
};
