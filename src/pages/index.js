import { MongoClient } from 'mongodb';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../components/Layout/Layout.js';
// import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';
// import Products from '../components/Products/Products.js';
import { getAPICategories, initCategories } from '../store/categorySlice.js';
import Counter from '../components/Counter.js';
import { wrapper } from '../store/store.js';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (stuff) => {
    const client = await MongoClient.connect(process.env.DB_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db();
    const categoryCollection = db.collection('categories');
    const categories = await categoryCollection.find().toArray();

    client.close();
    let result = categories.map((category) => ({
      name: category.name,
      description: category.description,
      id: category._id.toString(),
    }));

    store.dispatch(initCategories(result));

    // return {
    //   props: {
    //     categories: categories.map((category) => ({
    //       name: category.name,
    //       description: category.description,
    //       id: category._id.toString(),
    //     })),
    //   },
    //   // revalidate: 10,
    // };

    return {
      props: {},
    };
  }
);

export default function Home() {
  return (
    <>
      <Layout>
        <SelectCategory />
        {/* <Category />
        <Products /> */}
        <Counter />
      </Layout>
    </>
  );
}
