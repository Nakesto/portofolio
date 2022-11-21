import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { BoxMotion } from "../animation/motion";

const Education = ({ colorMode }) => {
  return (
    <BoxMotion
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
        color={colorMode === "dark" ? "white" : "black"}
        mb="30px"
      >
        Education
      </Text>
      <Flex direction="column" gap="10px">
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
            color={colorMode === "dark" ? "white" : "black"}
          >
            <strong style={{ color: "#7D869C" }}>2014-2017</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;SMP Xaverius Maria Palembang
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
            color={colorMode === "dark" ? "white" : "black"}
          >
            <strong style={{ color: "#7D869C" }}>2017-2020</strong>
            &nbsp;&nbsp;&nbsp;SMA Xaverius 1 Palembang
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
            color={colorMode === "dark" ? "white" : "black"}
          >
            <strong style={{ color: "#7D869C" }}>2020 to present</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;Universitas Multimedia Nusantara
          </Text>
        </Flex>
      </Flex>
    </BoxMotion>
  );
};

export default Education;
