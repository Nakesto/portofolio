import { Flex, Icon, Image, Link, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FlexMotion } from "../animation/motion";

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
          src="Timur.jpg"
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
            xsm: "url(Timur.jpg)",
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
              A web app for company profile PT TIMURJAYA PLASINDO. This web is
              Single Page Application using React. I usually use Chakra UI for
              Modern Styling. The company profile contain list of products that
              have over 1000 products.
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
        marginBottom="75px"
        direction="row-reverse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src="Join.jpg"
          alt="Join App"
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
            xsm: "url(Join.jpg)",
            md: "unset",
          }}
          zIndex="10"
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
            Join
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
              A web app for E-commerce project named Join. This project has
              FrontEnd and BackEnd. FrontEnd using react and Backend using
              Laravel. I&apos;m managing all system of this application.
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
              Material UI
            </Text>
            <Text
              fontWeight="extrabold"
              paddingLeft="15px"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Laravel
            </Text>
            <Text
              fontWeight="extrabold"
              paddingLeft="15px"
              color={colorMode === "dark" ? "white" : "black"}
            >
              MySQL
            </Text>
          </Flex>
          <Flex direction="row" color="white" gap="25px">
            <Link href="">
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
          src="Kofika.jpg"
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
            xsm: "url(Kofika.jpg)",
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
            Complete Project
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
              A web app for coffeshop profile. This website have blogs that
              admin can add some blogs. Therefore, We build the laravel as
              BackEnd and dashboard for Admin to CRUD the blogs. FrontEnd using
              React and for Customizable style, we use Tailwind CSS
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
            <Text
              fontWeight="extrabold"
              paddingLeft="15px"
              color={colorMode === "dark" ? "white" : "black"}
            >
              MySQL
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
          src="CloneWhatsapp.png"
          alt="Clone WA"
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
            xsm: "url(Join.jpg)",
            md: "unset",
          }}
          zIndex="10"
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
            Complete Project
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Clone Whatsapp
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
              textAlign="left"
              fontWeight="bold"
              color={colorMode === "dark" ? "tertiary" : "black"}
            >
              A cloning whatsapp web app with custom features. This application
              web is full stack development. This using backend API in Go
              Programming Languange.
            </Text>
          </Flex>
          <Wrap
            color="white"
            paddingTop="15px"
            paddingBottom="15px"
            spacing="15px"
          >
            <Text
              fontWeight="extrabold"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Vue.js
            </Text>
            <Text
              fontWeight="extrabold"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Quasar
            </Text>
            <Text
              fontWeight="extrabold"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Gin Gonic (Golang)
            </Text>
            <Text
              fontWeight="extrabold"
              color={colorMode === "dark" ? "white" : "black"}
            >
              PostgreSQL
            </Text>
          </Wrap>
          <Wrap spacing="20px">
            <Link
              href="https://clone-whatsapp.onrender.com"
              style={{ textDecoration: "none" }}
            >
              <Flex direction="row" color="white" gap="10px">
                <Icon
                  as={FiExternalLink}
                  w="25px"
                  h="25px"
                  color={colorMode === "dark" ? "white" : "black"}
                />

                <Text
                  fontWeight="extrabold"
                  color={colorMode === "dark" ? "white" : "black"}
                >
                  FrontEnd
                </Text>
              </Flex>
            </Link>
            <Link
              href="https://golang-chat-api.onrender.com"
              style={{ textDecoration: "none" }}
            >
              <Flex direction="row" color="white" gap="10px">
                <Icon
                  as={FiExternalLink}
                  w="25px"
                  h="25px"
                  color={colorMode === "dark" ? "white" : "black"}
                />

                <Text
                  fontWeight="extrabold"
                  color={colorMode === "dark" ? "white" : "black"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  BackEnd
                </Text>
              </Flex>
            </Link>
            <Link
              href="https://github.com/Nakesto/vue-clone-whatsapp"
              style={{ textDecoration: "none" }}
            >
              <Icon
                as={AiOutlineGithub}
                w="25px"
                h="25px"
                color={colorMode === "dark" ? "white" : "black"}
              />
            </Link>
          </Wrap>
        </Flex>
      </FlexMotion>
    </>
  );
};

export default CardProject;
