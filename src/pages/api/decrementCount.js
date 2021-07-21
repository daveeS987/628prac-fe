import { MongoClient, ObjectId } from 'mongodb';

async function handleDecrementCount(req, res) {
  console.log('req from decrement count: ', req.body);
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const productsCollection = db.collection('products');

  const filter = { _id: ObjectId(req.body.productID) };
  await productsCollection.updateOne(filter, {
    $inc: { inStock: -1 },
  });
  client.close();

  res.status(200).json({ message: 'decremented' });
}

export default handleDecrementCount;
