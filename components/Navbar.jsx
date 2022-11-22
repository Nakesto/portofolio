import {
  Button,
  Container,
  Flex,
  Icon,
  Link,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { BoxMotion } from "../animation/motion";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isNav, setIsNav] = React.useState(false);

  const onScroll = () => {
    if (window.scrollY >= 80) {
      setIsNav(true);
    } else {
      setIsNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <BoxMotion
        w="100%"
        bg={isNav ? "rgb(125, 134, 126, 0.2)" : "transparent"}
        css={{ backdropFilter: "blur(10px)" }}
        h="100px"
        position="fixed"
        zIndex="10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        exit={{ opacity: 0 }}
      >
        <Container
          display="flex"
          alignItems="center"
          h="100%"
          maxWidth={{
            xsm: "100%",
          }}
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
        >
          <Text
            fontSize={{
              xsm: "xl",
              sm: "3xl",
            }}
            fontWeight="bold"
            color={colorMode == "light" ? "black" : "white"}
            letterSpacing={3}
          >
            Vincent Gunawan.
          </Text>
          <Spacer />
          <Flex
            h="60px"
            bg="transparent"
            gap={{
              xsm: "10px",
              md: "20px",
            }}
            alignItems="center"
          >
            <Link href="#projects" style={{ textDecoration: "none" }}>
              <Button
                bg="transparent"
                h="100%"
                color={colorMode == "light" ? "black" : "white"}
                _hover={{ bg: "transparent", textDecoration: "none" }}
                _active={{ bg: "transparent" }}
                _focus={{ border: "transparent" }}
              >
                <Text
                  display={{
                    xsm: "none",
                    md: "block",
                  }}
                  fontSize="lg"
                  fontWeight="medium"
                  letterSpacing={1}
                >
                  Projects
                </Text>
                <Icon
                  as={MdWorkOutline}
                  display={{
                    xsm: "block",
                    md: "none",
                  }}
                  w="25px"
                  h="25px"
                />
              </Button>
            </Link>
            <Link href="#contact" style={{ textDecoration: "none" }}>
              <Button
                bg="transparent"
                h="100%"
                color={colorMode == "light" ? "black" : "white"}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ border: "transparent" }}
              >
                <Text
                  display={{
                    xsm: "none",
                    md: "block",
                  }}
                  fontSize="lg"
                  fontWeight="medium"
                  letterSpacing={1}
                >
                  Contact
                </Text>
                <Icon
                  as={AiOutlineContacts}
                  display={{
                    xsm: "block",
                    md: "none",
                  }}
                  w="25px"
                  h="25px"
                />
              </Button>
            </Link>

            <Button
              bg="transparent"
              h="100%"
              onClick={toggleColorMode}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _focus={{ border: "transparent" }}
            >
              {colorMode === "light" ? (
                <Flex
                  justifyContent="center"
                  bg="quaternary"
                  alignItems="center"
                  h={{
                    xsm: "fit-content",
                    sm: "100%",
                  }}
                  borderRadius="lg"
                  px="18px"
                  py="18px"
                >
                  <MoonIcon
                    color="white"
                    fontSize={{
                      xsm: "15px",
                      sm: "20px",
                    }}
                  />
                </Flex>
              ) : (
                <Flex
                  justifyContent="center"
                  bg="primary"
                  alignItems="center"
                  h={{
                    xsm: "fit-content",
                    sm: "100%",
                  }}
                  borderRadius="lg"
                  px="18px"
                  py="18px"
                >
                  <SunIcon
                    color="black"
                    fontSize={{
                      xsm: "15px",
                      sm: "20px",
                    }}
                  />
                </Flex>
              )}
            </Button>
          </Flex>
        </Container>
      </BoxMotion>
    </>
  );
}

export default Navbar;
