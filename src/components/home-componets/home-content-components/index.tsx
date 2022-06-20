import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

export const HomeContent = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      ml={["", "1rem", "2rem"]}
    >
      <Heading variant={["mobile", "primary", "primary"]} mb="2rem">
        &#60;Gabriel/Dev&#62;
      </Heading>
      <Flex align="center" direction={["column", "column", "row"]}>
        <Avatar
          width="100px"
          height="100px"
          src="https://github.com/dejazz.png"
          m="2rem"
        />
        <Text
          variant={"primary"}
          width="100%"
          maxW={["17.6rem", "27.8rem"]}
          justifyContent={"center"}
          textAlign="justify"
        >
          {"    "}
          Sou um administrador mudando para área que sempre gostei. Gosto muito da
          tecnologia e sou apaixonado por aprender, acredito que devemos aproveitar
          para aprender cada vez mais sempre que pudermos. Dito isto, estou
          ingressando na carreira de tecnologia afim de adquirir mais
          conhecimentos e experiências e encontrar soluções para os problemas.”
        </Text>
      </Flex>
    </Flex>
  );
};
