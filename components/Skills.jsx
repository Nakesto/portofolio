import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { FlexMotion } from "../animation/motion";
import { CgScrollV } from "react-icons/cg";

const Skills = ({ colorMode }) => {
  return (
    <FlexMotion
      direction="column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
      exit={{ opacity: 0 }}
      h="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          color={colorMode === "dark" ? "white" : "black"}
          mb="30px"
        >
          Skills
        </Text>
        <Flex gap="20px">
          <Text>Scroll</Text>
          <Icon as={CgScrollV} w="25px" h="25px" />
        </Flex>
      </Flex>

      <Flex
        h={{
          xsm: "230px",
          sm: "190px",
        }}
        direction="column"
        gap="5px"
        style={{
          overflowY: "scroll",
        }}
      >
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            HTML5
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            CSS (Tailwind, ChakraUI, MaterialUI, Bootstrap)
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Javascript (React, Angular, NextJS)
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            PHP (Codeigniter, Laravel)
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Ionic
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Database (MySQL, FireBase)
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Golang (Gin Framework)
          </Text>
        </Flex>
        <Flex gap="15px" alignItems="start">
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Python
          </Text>
        </Flex>
      </Flex>
    </FlexMotion>
  );
};

export default Skills;
