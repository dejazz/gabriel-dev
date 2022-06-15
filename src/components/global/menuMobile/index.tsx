import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";



export const MenuMobile = () => {
  const infosMenu = ["Home", "Projetos", "Contato"];
  const history = useHistory();
  return (
    <Flex alignSelf={"flex-end"}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<AiOutlineMenu color="#ffff" fontSize={50} />}
          variant="outline"
          width="40px"
          alignSelf={"flex-end"}
          display={["flex", "flex", "flex", "none"]}
          border="none"
          m="3rem"
          _hover={{ background: "#000000" }}
          _selected={{ background: "#000000" }}
        />
        <MenuList bg={"#1E1E1E"} color="#ffff">
          {infosMenu.map((item, index) => (
            <MenuItem
              key={index}
              _hover={{ background: "#000000" }}
              onClick={() =>
                history.push(`/${item === "Home" ? "" : item.toLowerCase()}`)
              }
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
