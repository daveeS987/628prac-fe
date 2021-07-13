import { MongoClient, ObjectId } from 'mongodb';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import { wrapper } from '../../store/store';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    let selectedID = context.params.productID;
    const client = await MongoClient.connect(process.env.DB_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db();
    const productsCollection = db.collection('products');
    let product = await productsCollection.findOne({
      _id: ObjectId(selectedID),
    });

    client.close();
    let converted = {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      inStock: product.inStock,
      imageUrl: product.imageUrl,
      id: product._id.toString(),
    };

    return {
      props: converted,
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
  // const product = useSelector((state) => state.products.entities[oneID]);
  // const theProduct = product[oneID];
  // console.log('🚀 ~ file: index.js ~ line 67 ~ Details ~ products', product);

  return (
    <>
      <Layout>
        <h1>Product Details Page for now</h1>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <h3>{props.imageUrl}</h3>
        <h3>Price: {props.price}</h3>
        <h3>In Stock: {props.inStock}</h3>
      </Layout>
    </>
  );
}

export default Details;
