import { MongoClient } from 'mongodb';
import { useDispatch, useSelector } from 'react-redux';

import Products from '../components/Products/Products.js';
import Layout from '../components/Layout/Layout.js';
import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';
import { initCategories } from '../store/categorySlice.js';
import { initProducts } from '../store/productSlice.js';
import Counter from '../components/Counter.js';
import { wrapper } from '../store/store.js';

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

  products = products.map((product) => ({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    inStock: product.inStock,
    imageUrl: product.imageUrl,
    id: product._id.toString(),
  }));

  categories = categories.map((category) => ({
    name: category.name,
    description: category.description,
    id: category._id.toString(),
  }));

  store.dispatch(initCategories(categories));
  store.dispatch(initProducts(products));

  return {
    props: {},
  };
});

export default function Home() {
  return (
    <>
      <Layout>
        <SelectCategory />
        <Category />
        <Products />
        {/* <Counter /> */}
      </Layout>
    </>
  );
}
