import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { CardData } from "../cardProjects-componets";

export const ModalProjects = ({ project }: CardData) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        rightIcon={<ArrowForwardIcon />}
        mt="1rem"
        colorScheme="whiteAlpha"
        variant="outline"
        onClick={onOpen}
      >
        Ver mais
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#323131c9">
          <ModalHeader>{project.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Text textAlign="justify">{project.description}</Text>
            </Flex>

            <Flex w="100%" justifyContent="flex-end" align="center">
              {project.tecnology.map((item: string[], index: number) => (
                <Tag
                  key={index}
                  m="0.5rem"
                  size={"md"}
                  colorScheme={"pink"}
                  cursor="pointer"
                  _hover={{ background: "#ff4d6d" }}
                >
                  {item}
                </Tag>
              ))}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              as={Link}
              leftIcon={<AiFillGithub />}
              isExternal
              href={project.gitHub}
              colorScheme={"pink"}
              onClick={onClose}
              mr="1rem"
            >
              GitHub
            </Button>
            <Button
              disabled={project.prod === false}
              as={Link}
              leftIcon={<BiLinkExternal />}
              isExternal
              href={project.prod}
              colorScheme={"pink"}
            >
              Visitar Site
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
