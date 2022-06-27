import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header-components";
import { ImageHome } from "../../components/home-componets/backgroundImageHome-components";
import { HomeContent } from "../../components/home-componets/home-content-components";
import { motion } from "framer-motion";
import { ProjectsList } from "../../components/projects-components/projectsList-components";

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <Flex
        direction="column"
        w="100vw"
        h="100vh"
        align={["center", "center", ""]}
        justify={["", "", "flex-start", ""]}
        overflow="hidden"
      >
        <Header />
        <Flex
          direction="column"
          w="100vw"
          h="100vh"
          align={["center", "center", ""]}
          justify={["", "", "flex-start", "center"]}
          overflow="hidden"
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar": {
              width: "16px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          <Flex
            w="100%"
            maxW="1100px"
            h={["", "", "100%"]}
            direction="column"
            align={["center", "center", ""]}
            justify={["center", "center", "", "center"]}
            mt={["","","24rem"]}
          >
            <Flex
              w="100%"
              maxW="1100px"
      
              align={["center", "center", ""]}
              justify={["center", "center", "", "center"]}
            >
              <HomeContent />
              <ImageHome />
            </Flex>
            <Flex direction="column"  h="100%" maxH="800px" w="100%">
            <ProjectsList />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};
