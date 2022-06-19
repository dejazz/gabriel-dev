import { Flex } from "@chakra-ui/react";
import { MenuDeskTop } from "../../components/global/menuDeskTop";
import { MenuMobile } from "../../components/global/menuMobile";

import { ProjectsList } from "../../components/projects-components/projectsList-components";

export const ProjectsPage = () => {
  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      align={["center", "center", ""]}
      justify={["", "", "flex-start", "center"]}
      overflow="hidden"
    >
      <MenuMobile />
      <Flex>
        <MenuDeskTop />
      </Flex>
      <Flex
        w="100%"
        maxW="1100px"
        h={["", "", "100%"]}
        direction={"column"}
        align={["center", "center", ""]}
        justify={["center", "center", "", "center"]}
      >
        <Flex
          w="100%"
          maxW="1100px"
          height="100%"
          maxH="790px"
          h={["", "", "100%"]}
          justify={["","","center"]}
            overflow="auto"
            sx={{
                '&::-webkit-scrollbar': {
                  width: '16px',
                  borderRadius: '8px',
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
         
        >
          <ProjectsList />
        </Flex>
      </Flex>
    </Flex>
  );
};
