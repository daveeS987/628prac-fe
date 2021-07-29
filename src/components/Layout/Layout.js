import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Davee's NextJS Virtual Store</title>
        <meta
          name="Davee's Virtual Store"
          content="A mock virutal store made with next js capable of performing crud opertations to a Mongo database"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
