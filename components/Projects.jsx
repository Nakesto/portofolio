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
                <Link href="https://github.com/Nakesto/UAS2021">
                  <Icon
                    as={AiOutlineGithub}
                    w="25px"
                    h="25px"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </Link>
                <Link href="https://hoteltransylvania30.000webhostapp.com/">
                  <Icon as={FiExternalLink} w="25px" h="25px" />
                </Link>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading mb="20px">Hotel Transylvania</Heading>
            <Text>Hotel Application with login and booking room featuture</Text>
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
              News Web Apllicatio named Beritaku. Beritaku have some category
              news such as sport, economy and lifestyle
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
                <Link href="https://github.com/Nakesto/Moda---Cross">
                  <Icon as={AiOutlineGithub} w="25px" h="25px" />
                </Link>
                <Icon as={FiExternalLink} w="25px" h="25px" />
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading mb="20px">Moda</Heading>
            <Text>
              Thrifting cross-platform app named Moda. This app looks like
              E-commerce, then have some features like cart, chat, and admin
            </Text>
          </CardBody>
          <CardFooter gap="20px">
            <Text>Ionic</Text>
            <Text>React</Text>
            <Text>Firebase</Text>
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
                <Link href="https://github.com/Nakesto/UAS-PTI2021">
                  <Icon
                    as={AiOutlineGithub}
                    w="25px"
                    h="25px"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </Link>
                <Link href="https://nakesto.github.io/UAS-PTI2021/">
                  <Icon as={FiExternalLink} w="25px" h="25px" />
                </Link>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading mb="20px">Delicioso</Heading>
            <Text>
              Chat Bot Web Application name delicioso. This web use twitter bot
              to interact directly with user.
            </Text>
          </CardBody>
          <CardFooter gap="20px">
            <Text>Angular</Text>
            <Text>Twitter Bot</Text>
            <Text>Bootstrap</Text>
          </CardFooter>
        </Card>
      </GridMotion>
    </Flex>
  );
};

export default Projects;
