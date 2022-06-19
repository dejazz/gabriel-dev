import { Button, Flex, Heading, Link, Stack, useToast } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
export const ContactContent = () => {
  const toast = useToast();

  const copyEmailFromUser = () => {
    navigator.clipboard.writeText("gabrielmunizsch@gmail.com");
    toast({
      position: "top-right",
      title: "Email copiado",
      description: "Email copiado para área de transferência.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      ml={["", "1rem", "2rem"]}
    >
      <Heading textAlign="center" variant={["mobile", "primary", "primary"]} mb="2rem">
        Quer entrar em contato comigo ?
      </Heading>
      <Stack spacing={10}>
        <Button
          as={Link}
          leftIcon={<AiFillLinkedin />}
          isExternal
          href="https://www.linkedin.com/in/gabriel-muniz-schneider/"
          colorScheme={"linkedin"}
        >
          Linkedin
        </Button>
        <Button
          as={Link}
          leftIcon={<AiFillGithub />}
          isExternal
          href="https://github.com/dejazz"
          colorScheme={"pink"}
        >
          GitHub
        </Button>
        <Button
          leftIcon={<SiGmail />}
          colorScheme={"pink"}
          onClick={copyEmailFromUser}
        >
          gabrielmunizsch@gmail.com
        </Button>
      </Stack>
    </Flex>
  );
};
