import { Flex, Heading } from "@chakra-ui/react";
import { ButtonsContact } from "../buttons-contact-components";

export const ContactContent = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      ml={["", "1rem", "2rem"]}
    >
      <Heading
        textAlign="center"
        variant={["mobile", "primary", "primary"]}
        mb="2rem"
      >
        &#60;Contatos/&#62;
      </Heading>

      <ButtonsContact />
    </Flex>
  );
};
