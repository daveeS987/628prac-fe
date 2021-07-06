import Layout from '../components/Layout/Layout.js';
import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';
import Products from '../components/Products/Products.js';

export default function Home() {
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
