import { Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { ModalProjects } from "../modalProjects-components";
import { motion } from "framer-motion";
interface ItemCard {
  id:number,
  name: string;
  gitHub: string;
  prod: string | boolean;
  img: string;
  description: string;
  tecnology: any;
}
export interface CardData {
  project: ItemCard;

}

export const CardProjects = ({ project }: CardData) => {
  return (
    
    <motion.div 
    animate={{ x: 5 }}
    transition={{ ease: "easeOut", duration: 1 }}
    
    >
    <Flex
      direction={project.id % 2 === 0 ?["column", "column", "row"]:["column", "column", "row-reverse"]}
      justify="center"
      align="center"
      mb="3rem"
      h="100%"
    >
      {project.img ? (
        <Image
          borderRadius="0.5rem"
          width="100%"
          height="100%"
          maxW="550px"
          maxH="300px"
          src={project.img}
          alt={project.name}
        />
      ) : (
        <Spinner size={"xl"} color="red.500" />
      )}
      <Flex
        borderRadius="0.5rem"
        width="100%"
        height="100%"
        maxW="550px"
        maxH="300px"
        direction="column"
        justify="center"
        align="center"
        background="#101010"
      >
        <Heading>{project.name}</Heading>
        <ModalProjects project={project} />
      </Flex>
    </Flex>
    </motion.div>
  );
};
