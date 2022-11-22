import {
  Box,
  Container,
  Icon,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FlexMotion } from "../animation/motion";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});

const About = dynamic(() => import("../components/About"), {
  ssr: false,
});

const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});

const Contacts = dynamic(() => import("../components/Contacts"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

export default function Home() {
  const { colorMode } = useColorMode();
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <>
      <Head>
        <title>Vincent | Portofolio</title>
        <meta name="title" content="Vincent's Portofolio" />
        <meta name="description" content="Hi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        maxWidth={{
          xsm: "1400px",
          xl: "100%",
        }}
      >
        <VStack w="100%">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: colorMode === "dark" ? "#1B262C" : "#FFFCF2",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "bubble",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 300,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: colorMode === "dark" ? "#C7EFCF" : "#FE5F55",
                },
                links: {
                  color: colorMode === "dark" ? "#C7EFCF" : "#FE5F55",
                  distance: 100,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 55,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
          <Hero colorMode={colorMode} />
          <About colorMode={colorMode} />
          <Projects colorMode={colorMode} />
          <Contacts colorMode={colorMode} />
          <Footer colorMode={colorMode} />
        </VStack>
      </Container>
      <FlexMotion
        position="fixed"
        width="50px"
        bottom="0"
        left={{
          xsm: "-150px",
          md: "20px",
          xl: "25px",
        }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        exit={{ opacity: 0 }}
        zIndex="10"
      >
        <Link href="https://www.instagram.com/vinboy_huang">
          <Icon as={AiOutlineInstagram} w="25px" h="25px" />
        </Link>
        <Link href="https://github.com/nakesto">
          <Icon as={AiOutlineGithub} w="25px" h="25px" mt="25px" />
        </Link>
        <Link href="https://www.linkedin.com/in/vincent-gunawan-2461b3234/">
          <Icon as={AiOutlineLinkedin} w="25px" h="25px" mt="25px" />
        </Link>
        <Box
          width="0.5px"
          bg={colorMode === "dark" ? "white" : "black"}
          height="75px"
          mt="25px"
        />
      </FlexMotion>
      <FlexMotion
        position="fixed"
        width="50px"
        bottom="0"
        right={{
          xsm: "-150px",
          md: "20px",
          xl: "25px",
        }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        exit={{ opacity: 0 }}
      >
        <Text
          style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}
          letterSpacing={2}
        >
          vinboyhunag88@gmail.com
        </Text>
        <Box
          width="0.5px"
          bg={colorMode === "dark" ? "white" : "black"}
          height="75px"
          mt="25px"
        />
      </FlexMotion>
    </>
  );
}
