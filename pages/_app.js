import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Layout from "../components/Layout";
import "@fontsource/quicksand";

const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#FFFCF2", "#1B262C")(props),
      },
    }),
  },
  config,
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

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
