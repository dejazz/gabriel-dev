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
import CssLottie from "../../Lotties/cssLottie/cssLottie";
import HtmlLottie from "../../Lotties/htmlLottie/htmlLottie";
import JavascriptLottie from "../../Lotties/javascriptLottie/javascriptLottie";
import MongoDBLottie from "../../Lotties/mongoDBLottie/mongodbLottie";
import NodeLottie from "../../Lotties/nodeLottie/nodeLottie";
import ReactLottie from "../../Lotties/reactLottie/reactLottie";
import { CardData } from "../cardProjects-componets";

export const ModalProjects = ({ project }: CardData) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lotties:any = {
    javascript: <Flex width="100%" height={10}><JavascriptLottie /></Flex>,
    node: <Flex width="100%" height={10}><NodeLottie /></Flex>,
    mongodb: <Flex width="100%" height={10}><MongoDBLottie /></Flex>,
    react: <Flex width="100%" height={10}><ReactLottie /></Flex>,
    html: <Flex width="100%" height={10}><HtmlLottie /></Flex>,
    css: <Flex width="100%" height={10}><CssLottie /></Flex>,
  };
 
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
              {project.tecnology.map((item:any, index: number) => (
                <Tag
                  height={10}
                  key={index}
                  m="0.5rem"
                  size={"md"}
                  colorScheme={"pink"}
                  cursor="pointer"
                  _hover={{ background: "#ff4d6d" }}
                >
                 {lotties[item.toLowerCase()] || item}
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
