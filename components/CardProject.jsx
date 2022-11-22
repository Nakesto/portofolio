import { Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FlexMotion } from "../animation/motion";
import "../styles/CardProject.module.css";

const CardProject = ({ colorMode }) => {
  return (
    <>
      <FlexMotion
        w="100%"
        justifyContent="center"
        alignItems="center"
        marginBottom="75px"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src="Timur.png"
          alt="Timur"
          w={{
            xsm: 0,
            md: "50%",
          }}
        />
        <Flex
          direction="column"
          flex="1"
          alignItems="end"
          padding={{
            xsm: "20px",
            sm: "30px",
            md: "0",
          }}
          marginLeft={{
            xsm: "0",
            md: "-100px",
            lg: "-75px",
          }}
          background={{
            xsm: "url(Timur.png)",
            md: "unset",
          }}
          backgroundSize="cover"
          boxShadow={{
            xsm:
              colorMode === "dark"
                ? "inset 0 0 0 2000px rgba(27, 38, 44, 0.95)"
                : "inset 0 0 0 2000px rgba(248, 249, 250, 0.95)",
            md: "none",
          }}
        >
          <Text
            color={colorMode === "dark" ? "primary" : "quaternary"}
            fontWeight="medium"
          >
            Featured Project
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={colorMode === "dark" ? "white" : "black"}
          >
            PT TIMURJAYA PLASINDO
          </Text>
          <Flex
            marginTop="20px"
            w="100%"
            justifyContent="center"
            alignItems="center"
            padding={{
              xsm: "0",
              md: "35px",
            }}
            bg={{
              sm: "none",
              md: colorMode === "dark" ? "primary" : "quaternary",
            }}
          >
            <Text
              textAlign="justify"
              fontWeight="bold"
              color={colorMode === "dark" ? "tertiary" : "black"}
            >
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </Text>
          </Flex>
          <Flex
            direction="row"
            color="white"
            paddingTop="15px"
            paddingBottom="15px"
          >
            <Text
              fontWeight="extrabold"
              color={colorMode === "dark" ? "white" : "black"}
            >
              React
            </Text>
            <Text
              fontWeight="extrabold"
              paddingLeft="15px"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Chakra UI
            </Text>
          </Flex>
          <Flex direction="row" color="white" gap="25px">
            <Icon
              as={AiOutlineGithub}
              w="25px"
              h="25px"
              color={colorMode === "dark" ? "white" : "black"}
            />
            <Icon
              as={FiExternalLink}
              w="25px"
              h="25px"
              color={colorMode === "dark" ? "white" : "black"}
            />
          </Flex>
        </Flex>
      </FlexMotion>
      <FlexMotion
        w="100%"
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
        direction="row-reverse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src="Kofika.png"
          alt="Kofika"
          w={{
            xsm: 0,
            md: "50%",
          }}
        />
        <Flex
          direction="column"
          flex="1"
          alignItems="start"
          padding={{
            xsm: "20px",
            sm: "30px",
            md: "0",
          }}
          marginRight={{
            xsm: "0",
            md: "-100px",
            lg: "-75px",
          }}
          background={{
            xsm: "url(Kofika.png)",
            md: "unset",
          }}
          backgroundSize="cover"
          boxShadow={{
            xsm:
              colorMode === "dark"
                ? "inset 0 0 0 2000px rgba(27, 38, 44, 0.95)"
                : "inset 0 0 0 2000px rgba(248, 249, 250, 0.95)",
            md: "none",
          }}
        >
          <Text
            color={colorMode === "dark" ? "primary" : "quaternary"}
            fontWeight="medium"
          >
            Finished Project
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={colorMode === "dark" ? "white" : "black"}
          >
            KOFIKA
          </Text>
          <Flex
            marginTop="20px"
            w="100%"
            justifyContent="center"
            alignItems="center"
            padding={{
              xsm: "0",
              md: "35px",
            }}
            bg={{
              sm: "none",
              md: colorMode === "dark" ? "primary" : "quaternary",
            }}
          >
            <Text
              textAlign="justify"
              fontWeight="bold"
              color={colorMode === "dark" ? "tertiary" : "black"}
            >
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </Text>
          </Flex>
          <Flex
            direction="row"
            color="white"
            paddingTop="15px"
            paddingBottom="15px"
          >
            <Text
              fontWeight="extrabold"
              color={colorMode === "dark" ? "white" : "black"}
            >
              React
            </Text>
            <Text
              fontWeight="extrabold"
              paddingLeft="15px"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Tailwind
            </Text>
            <Text
              fontWeight="extrabold"
              paddingLeft="15px"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Laravel
            </Text>
          </Flex>
          <Flex direction="row" color="white" gap="25px">
            <Link href="https://kofika.site/">
              <Icon
                as={FiExternalLink}
                w="25px"
                h="25px"
                color={colorMode === "dark" ? "white" : "black"}
              />
            </Link>
          </Flex>
        </Flex>
      </FlexMotion>
    </>
  );
};

export default CardProject;
