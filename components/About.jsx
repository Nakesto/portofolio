import { Flex, Stack, Text, Highlight } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FlexMotion, TextMotion } from "../animation/motion";
import Education from "./Education";
import Hobby from "./Hobby";
import Skills from "./Skills";

const About = ({ colorMode }) => {
  const [tabs, setTabs] = useState({
    education: true,
    hobby: false,
    skills: false,
  });
  return (
    <Flex
      h="fit-content"
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      paddingLeft={{
        xsm: "15px",
        sm: "28px",
        md: "70px",
        xl: "100px",
      }}
      paddingRight={{
        xsm: "15px",
        sm: "28px",
        md: "70px",
        xl: "100px",
      }}
      zIndex="5"
      paddingTop={{
        xsm: "100px",
        sm: "125px",
      }}
    >
      <TextMotion
        fontSize="5xl"
        fontWeight="bold"
        textAlign="center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Highlight
          query="01."
          styles={{
            px: "1",
            py: "1",
            color: colorMode === "dark" ? "primary" : "quaternary",
          }}
        >
          01. About Me
        </Highlight>
      </TextMotion>
      <FlexMotion
        w="100%"
        h={{
          xsm: "500px",
          sm: "400px",
        }}
        alignItems="center"
        justifyContent={{
          xsm: "start",
          md: "center",
        }}
        mt={{
          xsm: "20px",
          sm: "100px",
        }}
        direction={{
          xsm: "column",
          sm: "row",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Flex
          direction={{
            xsm: "row",
            sm: "column",
          }}
          marginRight={{
            xsm: "0",
            sm: "30px",
          }}
          w={{
            xsm: "100%",
            sm: "35%",
            xl: "38%",
          }}
          alignItems={{
            xsm: "start",
            sm: "end",
          }}
          justifyContent="start"
          h={{
            xsm: "fit-content",
            sm: "100%",
          }}
          overflowX="scroll"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            w="135px"
            px="15px"
            py="20px"
            h="90px"
            cursor="pointer"
            alignItems="center"
            borderLeft={{
              xsm: "0px",
              sm: tabs.education ? "4px" : 0,
            }}
            borderBottom={{
              xsm: tabs.education ? "4px" : 0,
              sm: "0",
            }}
            color={colorMode == "light" ? "black" : "white"}
            style={{
              borderColor: colorMode === "dark" ? "#C7EFCF" : "#E1AA7D",
            }}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ border: "transparent" }}
            onClick={() => {
              setTabs({
                education: true,
                hobby: false,
                skills: false,
              });
            }}
          >
            <Text
              fontSize="lg"
              color={
                tabs.education
                  ? colorMode === "dark"
                    ? "primary"
                    : "quaternary"
                  : "tertiary"
              }
              fontWeight={tabs.education ? "bold" : "medium"}
              letterSpacing={1}
              textAlign={{
                xsm: "center",
                sm: "left",
              }}
            >
              Education
            </Text>
          </Flex>
          <Flex
            w="135px"
            px="15px"
            py="20px"
            h="90px"
            bg="transparent"
            alignItems="center"
            justifyContent={{
              xsm: "center",
              sm: "start",
            }}
            borderLeft={{
              xsm: "0",
              sm: tabs.skills ? "4px" : 0,
            }}
            borderBottom={{
              xsm: tabs.skills ? "4px" : 0,
              sm: "0",
            }}
            style={{
              borderColor: colorMode === "dark" ? "#C7EFCF" : "#E1AA7D",
            }}
            cursor="pointer"
            onClick={() => {
              setTabs({
                education: false,
                hobby: false,
                skills: true,
              });
            }}
            color={colorMode == "light" ? "black" : "white"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ border: "transparent" }}
          >
            <Text
              fontSize="lg"
              color={
                tabs.skills
                  ? colorMode === "dark"
                    ? "primary"
                    : "quaternary"
                  : "tertiary"
              }
              fontWeight={tabs.skills ? "bold" : "medium"}
              letterSpacing={1}
              textAlign={{
                xsm: "center",
                sm: "left",
              }}
            >
              Skills
            </Text>
          </Flex>
          <Flex
            w="135px"
            px="15px"
            py="20px"
            h="90px"
            bg="transparent"
            alignItems="center"
            borderLeft={{
              xsm: "0",
              sm: tabs.hobby ? "4px" : 0,
            }}
            borderBottom={{
              xsm: tabs.hobby ? "4px" : 0,
              sm: "0",
            }}
            style={{
              borderColor: colorMode === "dark" ? "#C7EFCF" : "#E1AA7D",
            }}
            onClick={() => {
              setTabs({
                education: false,
                hobby: true,
                skills: false,
              });
            }}
            cursor="pointer"
            color={colorMode == "light" ? "black" : "white"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ border: "transparent" }}
          >
            <Text
              fontSize="lg"
              color={
                tabs.hobby
                  ? colorMode === "dark"
                    ? "primary"
                    : "quaternary"
                  : "tertiary"
              }
              fontWeight={tabs.hobby ? "bold" : "medium"}
              letterSpacing={1}
              textAlign={{
                xsm: "center",
                sm: "left",
              }}
            >
              Additional Skill
            </Text>
          </Flex>
        </Flex>
        <Stack
          w={{
            xsm: "100%",
            xl: "fit-content",
          }}
          mt={{
            xsm: "25px",
            sm: 0,
          }}
          flex="1"
          h="100%"
          justifyContent="start"
          bg="blue"
        >
          {tabs.education && <Education colorMode={colorMode} />}
          {tabs.skills && <Skills colorMode={colorMode} />}
          {tabs.hobby && <Hobby colorMode={colorMode} />}
        </Stack>
      </FlexMotion>
    </Flex>
  );
};

export default About;
