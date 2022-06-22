import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header-components";
import { ProjectsList } from "../../components/projects-components/projectsList-components";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <Flex direction="column"
        w="100vw"
        h="100vh"
        align={["center", "center", "center"]}
        justify={["", "", "flex-start", "center"]}
        overflow="hidden">
      <Header/>
      <Flex
        direction="column"
        w="100vw"
        h="99vh"
        align={["center", "center", "center"]}
        justify={["", "", "flex-start", "center"]}
        overflow="hidden"
   
      >
        
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
            maxH={["600px", "750px", "700px"]}
            h={["", "", "100%"]}
            justify={["", "", "center"]}
            overflow="auto"
            mt="1rem"
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
            <ProjectsList />
            
             
          </Flex>
        </Flex>
      </Flex>
      </Flex>
    </motion.div>
  );
};
