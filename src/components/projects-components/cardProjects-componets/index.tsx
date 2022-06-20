import { Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { ModalProjects } from "../modalProjects-components";

interface ItemCard {
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
    <Flex
      direction={["column", "column", "row"]}
      justify="center"
      align="center"
      mb="1rem"
    >
      {project.img ? (
        <Image
          borderRadius="0.5rem"
          width="100%"
          height="100%"
          maxW="400px"
          maxH="200px"
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
        maxW="400px"
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
  );
};
