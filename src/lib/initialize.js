import { MongoClient } from 'mongodb';

import { initCategories } from '../store/categorySlice';
import { initProducts } from '../store/productSlice';

export const initializeState = async ({ store }) => {
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
};
