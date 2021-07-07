// import { MongoClient } from 'mongodb';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../components/Layout/Layout.js';
import Category from '../components/Category/Category.js';
import SelectCategory from '../components/SelectCategory/SelectCategory.js';
import Products from '../components/Products/Products.js';
import { initCategories } from '../store/categorySlice.js';

// export async function getStaticProps(context) {
// const dispatch = useDispatch();
// const client = await MongoClient.connect(process.env.DB_ADDRESS, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// await client.connect();
// const db = client.db();
// const categoryCollection = db.collection('categories');
// const categories = await categoryCollection.find().toArray();
// console.log(
//   '🚀 ~ file: index.js ~ line 15 ~ getStaticProps ~ categories',
//   categories
// );
// client.close();

// dispatch(initCategories(categories));
// return {
//   props: {
//     categories: categories.map((category) => ({
//       name: category.name,
//       description: category.description,
//       id: category._id.toString(),
//     })),
//   },
//   // revalidate: 10,
// };

//   return {
//     props: { categories },
//   };
// }

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
