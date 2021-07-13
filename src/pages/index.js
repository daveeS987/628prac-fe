// import { MongoClient } from 'mongodb';
import { useSelector } from 'react-redux';

import Products from '../components/Products/Products.js';
import Layout from '../components/Layout/Layout.js';
import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';

import { wrapper } from '../store/store.js';
import { initCategories } from '../store/categorySlice.js';
import { initProducts } from '../store/productSlice.js';
import { initializeState } from '../lib/initialize.js';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await initializeState({ store });
});

export default function Home() {
  // const products = useSelector((state) => state.products.entities);
  // console.log('🚀 ~ file: index.js ~ line 56 ~ Home ~ products', products);
  return (
    <>
      <Layout>
        <SelectCategory />
        <Category />
        <Products />
      </Layout>
    </>
  );
}
