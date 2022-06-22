import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header-components";
import { ImageHome } from "../../components/home-componets/backgroundImageHome-components";
import { HomeContent } from "../../components/home-componets/home-content-components";
import { motion } from "framer-motion";

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
        >
          <Flex
            w="100%"
            maxW="1100px"
            h={["", "", "100%"]}
            direction="column"
            align={["center", "center", ""]}
            justify={["center", "center", "", "center"]}
          >
            <Flex
              w="100%"
              maxW="1100px"
              h={["", "", "100%"]}
              align={["center", "center", ""]}
              justify={["center", "center", "", "center"]}
            >
              <HomeContent />
              <ImageHome />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};
