import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MongoClient } from 'mongodb';

import Products from '../components/Products/Products.js';
import Layout from '../components/Layout/Layout.js';
import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';
// import SimpleCart from '../components/SimpleCart/SimpleCart.js';

import { wrapper } from '../store/store.js';
import { initCategories } from '../store/categorySlice.js';
import { getProductCounts } from '../store/productSlice.js';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const categoryCollection = db.collection('categories');
  const productsCollection = db.collection('products');
  let getCategories = categoryCollection.find().toArray();
  let getProducts = productsCollection.find().toArray();

  let [categories, products] = await Promise.all([getCategories, getProducts]);

  client.close();

  products = products.reduce((acc, product) => {
    acc[product._id.toString()] = {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
      id: product._id.toString(),
    };
    return acc;
  }, {});

  categories = categories.map((category) => ({
    name: category.name,
    description: category.description,
    id: category._id.toString(),
  }));

  store.dispatch(initCategories(categories));

  return {
    props: { categories, products },
  };
});

export default function Home({ categories, products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCounts());
  }, []);

  return (
    <>
      <Layout>
        {/* <SimpleCart /> */}
        <SelectCategory categories={categories} />
        <Category />
        <Products products={products} />
      </Layout>
    </>
  );
}
