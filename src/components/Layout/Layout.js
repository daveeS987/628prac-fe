import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import SimpleCart from '../SimpleCart/SimpleCart';

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
      <Header />
      <SimpleCart />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
