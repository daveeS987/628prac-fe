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

  res.status(200).json(categories);
}

export default handleCategories;
