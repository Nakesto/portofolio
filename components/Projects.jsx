import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Highlight,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardProject from "./CardProject";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FlexMotion, GridMotion, HeadingMotion } from "../animation/motion";

const Projects = ({ colorMode }) => {
  return (
    <Flex
      w="100%"
      paddingLeft={{
        xsm: "15px",
        sm: "30px",
        md: "70px",
        xl: "100px",
      }}
      paddingRight={{
        xsm: "15px",
        sm: "30px",
        md: "70px",
        xl: "100px",
      }}
      alignItems="center"
      zIndex="5"
      justifyContent="center"
      direction="column"
      paddingTop="125px"
      id="projects"
    >
      <HeadingMotion
        fontSize="5xl"
        mb="50px"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Highlight
          query="02."
          styles={{
            px: "1",
            py: "1",
            color: colorMode === "dark" ? "primary" : "quaternary",
          }}
        >
          02. Projects
        </Highlight>
      </HeadingMotion>

      <CardProject colorMode={colorMode} />
      <HeadingMotion
        margin="50px"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        Other Projects
      </HeadingMotion>
      <GridMotion
        gap={4}
        w="100%"
        templateColumns={{
          xsm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        marginBottom="50px"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Card bg={colorMode === "dark" ? "semiblack" : "gray"}>
          <CardHeader>
            <Flex justifyContent="space-between">
              <Icon
                color={colorMode === "dark" ? "primary" : "quaternary"}
                as={AiOutlineFolder}
                w="40px"
                h="40px"
              />
              <Flex gap="20px">
                <Icon
                  as={AiOutlineGithub}
                  w="25px"
                  h="25px"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <Link href="https://hoteltransylvania30.000webhostapp.com/">
                  <Icon as={FiExternalLink} w="25px" h="25px" />
                </Link>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading mb="20px">Hotel Transylvania</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              repellendus facilis accusamus quas sunt odio soluta quo
              praesentium culpa earum?
            </Text>
          </CardBody>
          <CardFooter gap="20px">
            <Text>PHP</Text>
            <Text>Codeigniter</Text>
            <Text>Bootstrap</Text>
          </CardFooter>
        </Card>
        <Card bg={colorMode === "dark" ? "semiblack" : "gray"}>
          <CardHeader>
            <Flex justifyContent="space-between">
              <Icon
                color={colorMode === "dark" ? "primary" : "quaternary"}
                as={AiOutlineFolder}
                w="40px"
                h="40px"
              />
              <Flex gap="20px">
                <Icon as={AiOutlineGithub} w="25px" h="25px" />
                <Link href="https://beritakuuuu.000webhostapp.com/">
                  <Icon as={FiExternalLink} w="25px" h="25px" />
                </Link>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading mb="20px">Beritaku</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              repellendus facilis accusamus quas sunt odio soluta quo
              praesentium culpa earum?
            </Text>
          </CardBody>
          <CardFooter gap="20px">
            <Text>PHP</Text>
            <Text>Bootstrap</Text>
          </CardFooter>
        </Card>
        <Card bg={colorMode === "dark" ? "semiblack" : "gray"}>
          <CardHeader>
            <Flex justifyContent="space-between">
              <Icon
                color={colorMode === "dark" ? "primary" : "quaternary"}
                as={AiOutlineFolder}
                w="40px"
                h="40px"
              />
              <Flex gap="20px">
                <Icon as={AiOutlineGithub} w="25px" h="25px" />
                <Icon as={FiExternalLink} w="25px" h="25px" />
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading mb="20px">Moda</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              repellendus facilis accusamus quas sunt odio soluta quo
              praesentium culpa earum?
            </Text>
          </CardBody>
          <CardFooter gap="20px">
            <Text>Ionic</Text>
            <Text>React</Text>
            <Text>Firebase</Text>
          </CardFooter>
        </Card>
      </GridMotion>
    </Flex>
  );
};

export default Projects;