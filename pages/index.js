import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/Layout/Layout';
import Category from '../components/Category/Category';
import Products from '../components/Products/Products';

export default function Home() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Layout>
        <Category />
        <Products />
      </Layout>
    </React.Fragment>
  );
}
