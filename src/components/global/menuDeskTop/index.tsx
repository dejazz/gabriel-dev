import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Iheader } from "../../header-components";

export const MenuDeskTop = ({ home }: Iheader) => {
  const infosMenu = ["Home", "Sobre mim", "Projetos", "Contato"];

  return (
    <Flex display={["none", "none", "none", "flex"]} m="2rem">
      {infosMenu.map((item, index) => (
        <Button
          key={index}
          as={Link}
          disabled={home && item === "Home" ? true : false}
          display={home && item === "Home" ? 'none' : 'flex'}
          to={`/${item === "Home" ? "" : item.toLowerCase().trim()}`}
          ml="1rem"
          colorScheme={"pink"}
          sx={{ a: { textDecoration: "none" } }}
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
};
