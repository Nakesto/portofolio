import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useLayoutEffect, useState } from "react";
import { FlexMotion } from "../animation/motion";

function Hero({ colorMode }) {
  const [[width, height], setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <FlexMotion
      h={height > 600 ? "100vh" : "fit-content"}
      alignItems="center"
      w="100%"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
    >
      <Flex
        w="100%"
        alignItems="center"
        h={height > 600 ? "fit-content" : "100%"}
        paddingTop={{
          xsm: height > 600 ? "100px" : "125px",
          lg: height > 600 ? "0" : "125px",
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
        direction="column"
        justifyContent={{
          sm: "start",
          xl: "center",
        }}
        zIndex="5"
      >
        <Flex
          w="100%"
          direction={{
            xsm: "column",
            sm: "row",
          }}
          alignItems={{
            xsm: "center",
            sm: "start",
          }}
        >
          <Avatar
            size={{
              xsm: "2xl",
              sm: "xl",
              lg: "2xl",
            }}
            name="Vincent Gunawan"
            src="Me.jpg"
            mr={{
              xsm: "0",
              sm: "50px",
            }}
            mb={{
              xsm: "30px",
              sm: "0",
            }}
          />
          <Flex
            flex="1"
            direction="column"
            justifyContent="center"
            alignItems={{
              xsm: "center",
              sm: "start",
            }}
          >
            <Text
              fontSize={{
                lg: "5xl",
                md: "3xl",
                xsm: "2xl",
              }}
              fontWeight={{
                lg: "bold",
                xsm: "extrabold",
              }}
              color={colorMode === "dark" ? "white" : "black"}
            >
              Vincent Gunawan
            </Text>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={colorMode === "dark" ? "primary" : "quaternary"}
              textAlign={{
                xsm: "center",
                sm: "left",
              }}
            >
              Full Stack Developer (FrontEnd / BackEnd / Devops)
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={{
            lg: "row",
            xsm: "column-reverse",
          }}
          justifyContent="center"
          alignItems="center"
          mt={{
            sm: "25px",
            lg: "50px",
          }}
        >
          <Flex
            direction="column"
            mb="28px"
            alignItems="end"
            w={{
              lg: "52%",
              sm: "100%",
            }}
          >
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={colorMode === "dark" ? "white" : "black"}
              mb="5px"
              display={{
                xsm: "none",
                sm: "block",
              }}
            >
              Description
            </Text>
            <Divider
              w="85px"
              borderColor={colorMode === "dark" ? "primary" : "quaternary"}
              border="5px"
              display={{
                xsm: "none",
                sm: "block",
              }}
            />
            <Text
              textAlign="justify"
              fontSize="lg"
              fontWeight="semibold"
              mb="25px"
              color={colorMode === "dark" ? "tertiary" : "black"}
              display={{
                xsm: "none",
                sm: "block",
              }}
            >
              Vincent is a freelance and a full-stack web developer based in
              Tangerang with a passion for building website application he
              wants. He has a knack for all things, from planning and designing
              all the way to solving real-life problems with code. When not
              coding, he loves to playing basketball. Currently, he is living
              off of his own product called Join. He want to complete the
              product as soon as possible.
            </Text>
            <Link
              href="CV_VincentGunawan.pdf"
              download="CV_VincentGunawan"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                bg={colorMode === "dark" ? "primary" : "quaternary"}
                color="black"
                size="lg"
              >
                My Resume
              </Button>
            </Link>
          </Flex>
          <Box
            w={{
              xsm: "100%",
              sm: "48%",
            }}
            mt={{
              sm: "0",
              lg: "-100px",
              xl: "-135px",
            }}
          >
            <Box w="100%">
              <Image
                src="Programmer3.png"
                alt="programmer"
                style={{ objectFit: "cover" }}
                display={{
                  xsm: "block",
                  sm: "none",
                  md: "block",
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </FlexMotion>
  );
}

export default Hero;
