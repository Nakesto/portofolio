import { Button, Flex, Highlight } from "@chakra-ui/react";
import React from "react";
import { HeadingMotion, TextMotion } from "../animation/motion";

const Contacts = ({ colorMode }) => {
  const mailto = (e) => {
    window.location.href =
      "mailto:vinboyhuang88@gmail.com?subject=Response&body=Hi, How Are You?";
    e.preventDefault();
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      w="100%"
      paddingLeft={{
        xsm: "15px",
        sm: "30px",
        md: "70px",
      }}
      paddingRight={{
        xsm: "15px",
        sm: "30px",
        md: "70px",
      }}
      zIndex="5"
      py="125px"
      id="contact"
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
          query="03."
          styles={{
            px: "1",
            py: "1",
            color: colorMode === "dark" ? "primary" : "quaternary",
          }}
        >
          03. Contact
        </Highlight>
      </HeadingMotion>
      <HeadingMotion color={colorMode === "dark" ? "primary" : "quaternary"}>
        Get In Touch
      </HeadingMotion>
      <TextMotion
        maxWidth="650px"
        fontSize="2xl"
        py="30px"
        textAlign="center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        I&apos;m currently open to work and searching for intern web and mobile
        developer. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </TextMotion>
      <Button
        bg={colorMode === "dark" ? "primary" : "quaternary"}
        color={colorMode === "dark" ? "black" : "white"}
        fontSize="3xl"
        px="20px"
        py="30px"
        onClick={mailto}
      >
        Contact Me
      </Button>
    </Flex>
  );
};

export default Contacts;
