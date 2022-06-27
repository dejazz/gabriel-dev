import { Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/header-components";
import { ImageHome } from "../../components/home-componets/backgroundImageHome-components";
import { HomeContent } from "../../components/home-componets/home-content-components";
import { motion } from "framer-motion";
export const AboutMePage = () => {
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
      <Header home={false} />
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
    
        >
          <Heading
            colorScheme={"whiteAlpha"}
            textAlign="center"
            variant={["mobile", "primary", "primary"]}
            m="2rem"
          >
               &#60;Sobre mim/&#62;
          </Heading>
          <Flex
            w="100%"
            maxW="1100px"
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
