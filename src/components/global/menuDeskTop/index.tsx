import { Flex, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuDeskTop = () => {
  const infosMenu = ["Sobre mim", "Projetos", "Contato"];

  return (
    <Flex
      display={["none", "none", "none", "flex"]}
      direction="column"
      justify="space-between"
      m="1rem"
    >
      <Stack spacing={20}>
        {infosMenu.map((item, index) => (
          <Link
            key={index}
            to={`/${item === "Sobre mim" ? "" : item.toLowerCase()}`}
          >
            <Text variant="link">{item}</Text>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};
