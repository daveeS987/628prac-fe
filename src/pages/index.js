import { MongoClient } from 'mongodb';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../components/Layout/Layout.js';
// import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';
// import Products from '../components/Products/Products.js';
import { getAPICategories, initCategories } from '../store/categorySlice.js';
import { wrapper } from '../store/store.js';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (stuff) => {
    console.log(
      '🚀 ~ file: index.js ~ line 45 ~ getStaticProps ~ store: ',
      store
    );

    const client = await MongoClient.connect(process.env.DB_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db();
    const categoryCollection = db.collection('categories');
    const categories = await categoryCollection.find().toArray();
    console.log(
      '🚀 ~ file: index.js ~ line 57 ~ getStaticProps ~ categories',
      categories
    );

    client.close();

    store.dispatch(initCategories(categories));

    // dispatch(initCategories(categories));
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
      </Layout>
    </>
  );
}
