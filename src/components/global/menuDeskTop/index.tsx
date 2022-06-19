import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuDeskTop = () => {
  const infosMenu = ["Sobre mim", "Projetos", "Contato"];

  return (
    <Flex display={["none", "none", "none", "flex"]} m="2rem">
      {infosMenu.map((item, index) => (
        <Link
          key={index}
          to={`/${item === "Sobre mim" ? "" : item.toLowerCase()}`}
        >
          <Text ml="1rem" variant="link">
            {item}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};
