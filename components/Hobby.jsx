import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { BoxMotion } from "../animation/motion";

const Hobby = ({ colorMode }) => {
  return (
    <BoxMotion
      width="100%"
      direction="column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
      exit={{ opacity: 0 }}
    >
      <Text
        fontSize="4xl"
        fontWeight="semibold"
        color={colorMode === "dark" ? "white" : "dark"}
        mb="30px"
      >
        Additional Skill
      </Text>
      <Flex direction="column">
        <Flex>
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
            mr="15px"
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "dark"}
            mb="10px"
          >
            <strong style={{ color: "#7D869C" }}>Learning</strong>
            &nbsp;New Technology
          </Text>
        </Flex>
        <Flex>
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
            mr="15px"
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "dark"}
            mb="10px"
          >
            <strong style={{ color: "#7D869C" }}>Solving</strong>
            &nbsp;Problem
          </Text>
        </Flex>
        <Flex>
          <Icon
            as={BiRightArrow}
            w="20px"
            h="20px"
            mt="5px"
            color={colorMode === "dark" ? "primary" : "quaternary"}
            mr="15px"
          />
          <Text
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "dark"}
          >
            <strong style={{ color: "#7D869C" }}>Critical</strong>
            &nbsp;Thinking
          </Text>
        </Flex>
      </Flex>
    </BoxMotion>
  );
};

export default Hobby;
