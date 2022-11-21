import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = ({ colorMode }) => {
  return (
    <Link href="" style={{ zIndex: 5, textDecoration: "none" }}>
      <Flex direction="column" maxW="500px" alignItems="center" py="75px">
        <Text
          color={colorMode === "dark" ? "tertiary" : "black"}
          textAlign="center"
          fontWeight="bold"
        >
          Designed and Made by Vincent Gunawan
        </Text>
        <Icon
          as={AiOutlineGithub}
          w="25px"
          h="25px"
          color={colorMode === "dark" ? "tertiary" : "black"}
          mt="10px"
        />
      </Flex>
    </Link>
  );
};

export default Footer;
