import Layout from '../components/layout/Layout';
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
