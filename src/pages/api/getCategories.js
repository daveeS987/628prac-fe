import { MongoClient } from 'mongodb';

async function handleCategories(req, res) {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const categoryCollection = db.collection('categories');
  const categories = await categoryCollection.find().toArray();
  client.close();
  // let converted = categories.map((category) => ({
  //   name: category.name,
  //   description: category.description,
  //   id: category._id.toString(),
  // }));
  // console.log(
  //   '🚀 ~ file: getCategories.js ~ line 18 ~ converted ~ converted',
  //   converted
  // );

  res.status(200).json(categories);
}

export default handleCategories;
