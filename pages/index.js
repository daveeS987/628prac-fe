import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { MongoClient } from 'mongodb';
import Layout from '../components/Layout/Layout';
import SelectCategory from '../components/SelectCategory.js/SelectCategory';
import CurrentCategory from '../components/Category/Category';
import Products from '../components/Products/Products';

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const categoryCollection = db.collection('categories');
  const categories = await categoryCollection.find().toArray();
  client.close();

  return {
    props: {
      categories: categories.map((category) => ({
        name: category.name,
        description: category.description,
        id: category._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default function Home({ categories }) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Layout>
        <SelectCategory category={categories} />
        <CurrentCategory />
        <Products />
      </Layout>
    </React.Fragment>
  );
}
