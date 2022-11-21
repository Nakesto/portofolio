import "../styles/globals.css";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "@fontsource/quicksand";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#FFFCF2", "#1B262C")(props),
      },
    }),
  },
  colors: {
    primary: "#C7EFCF",
    secondary: "#FE5F55",
    tertiary: "#7D869C",
    quaternary: "#E1AA7D",
    semiblack: "#2D3748",
    gray: "#f8f9fa",
    black: "#1B262C",
    white: "#FFFCF2",
  },
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Quicksand', sans-serif`,
  },
  breakpoints: {
    xsm: "0px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1400px",
  },
});

function ForceDarkMode({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ForceDarkMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ForceDarkMode>
    </ChakraProvider>
  );
}

export default MyApp;
