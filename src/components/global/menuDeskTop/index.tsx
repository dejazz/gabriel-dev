import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuDeskTop = () => {
  const infosMenu = ["Sobre mim", "Projetos", "Contato"];

  return (
    <Flex display={["none", "none", "none", "flex"]} m="2rem">
      {infosMenu.map((item, index) => (
        <Button
          key={index}
          as={Link}
          to={`/${item === "Sobre mim" ? "" : item.toLowerCase()}`}
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
