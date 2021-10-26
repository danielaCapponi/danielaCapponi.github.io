import Head from "next/head";

import "../styles/globals.scss";
import { useRouter } from "next/router";

// Comenzar a trabajar con Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Provider del theme para el modo oscuro/claro
import { ThemeProvider } from "styled-components";

import Header from "@/components/Header/Header";

import { useDarkMode } from "@/styles/mode/useDarkMode";
import { GlobalStyles } from "@/styles/mode/globalStyles";
import { lightTheme, darkTheme } from "@/styles/mode/Theme";
import Toggle from "@/styles/mode/Toggler";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const router = useRouter();

  if (!mountedComponent) return <div />;
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Head>
          <title>Trilátera .:.</title>
        </Head>
        {router.route !== "/login" &&
          router.route !== "/registro" && <Header />}
        {router.route !== "/login" &&
          router.route !== "/registro" && (
            <Toggle theme={theme} toggleTheme={themeToggler} />
          )}
        <Component {...pageProps} />
        {/*           <Footer /> */}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
