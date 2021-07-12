import Layout from '../../components/Layout/Layout';

import { wrapper } from '../../store/store';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
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
  const numbers = ['1', '2', '3', '4'];

  let paths = numbers.map((fakeId) => {
    return {
      params: {
        productID: fakeId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

function Details() {
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
