import {
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { BoxMotion } from "../animation/motion";

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
                display={{
                  xsm: "none",
                  md: "block",
                }}
                color={colorMode == "light" ? "black" : "white"}
                _hover={{ bg: "transparent", textDecoration: "none" }}
                _active={{ bg: "transparent" }}
                _focus={{ border: "transparent" }}
              >
                <Text fontSize="lg" fontWeight="medium" letterSpacing={1}>
                  Projects
                </Text>
              </Button>
            </Link>
            <Link href="#contact" style={{ textDecoration: "none" }}>
              <Button
                bg="transparent"
                h="100%"
                display={{
                  xsm: "none",
                  md: "block",
                }}
                color={colorMode == "light" ? "black" : "white"}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ border: "transparent" }}
              >
                <Text fontSize="lg" fontWeight="medium" letterSpacing={1}>
                  Contact
                </Text>
              </Button>
            </Link>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={
                  <HamburgerIcon
                    mx={{
                      xsm: "15px",
                      sm: "0",
                    }}
                  />
                }
                variant="outline"
                h={{
                  xsm: "fit-content",
                  sm: "100%",
                }}
                borderRadius="lg"
                borderWidth="2px"
                borderColor="tertiary"
                px={{
                  xsm: "0",
                  sm: "18px",
                }}
                py={{
                  xsm: "15px",
                  sm: "0",
                }}
                display={{
                  md: "none",
                }}
              />
              <MenuList>
                <MenuItem
                  color={colorMode === "dark" ? "primary" : "quaternary"}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  color={colorMode === "dark" ? "primary" : "quaternary"}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
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
