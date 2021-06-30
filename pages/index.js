import Layout from '../components/Layout/Layout';
import SelectCategories from '../components/SelectCategories/SelectCategories';
import Products from '../components/Products/Products';

export default function Home() {
  return (
    <>
      <Layout>
        <h1>This is Home Page</h1>
        <SelectCategories />
        <Products />
      </Layout>
    </>
  );
}
