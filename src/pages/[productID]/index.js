import { MongoClient } from 'mongodb';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import { wrapper } from '../../store/store';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    console.log('🚀 ~ file: index.js ~ line 8 ~ store', store);
    console.log(
      '🚀 ~ file: details.js ~ line 4 ~ getStaticProps ~ context',
      context
    );
    let dummyData = {
      property1: 'hello',
      property2: 'testing',
    };
    return {
      props: {
        dummyData,
      },
    };
  }
);

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const productsCollection = db.collection('products');
  let products = await productsCollection.find().toArray();
  // console.log(
  //   '🚀 ~ file: index.js ~ line 35 ~ getStaticPaths ~ products',
  //   products
  // );
  client.close();

  let paths = products.map((product) => {
    return {
      params: {
        productID: product._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

function Details(props) {
  console.log('🚀 ~ file: index.js ~ line 44 ~ Details ~ props', props);

  const products = useSelector((state) => state.products.entities);
  console.log('🚀 ~ file: index.js ~ line 45 ~ Details ~ products', products);
  return (
    <>
      <Layout>
        <h1>Product Details Page for now</h1>
        <h1>Testing dynamic routes</h1>
        <h3>Product Name</h3>
        <h3>description</h3>
        <h3>imageUrl</h3>
        <h3>price</h3>
        <h3>inStock</h3>
      </Layout>
    </>
  );
}

export default Details;
