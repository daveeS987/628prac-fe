import { MongoClient, ObjectId } from 'mongodb';

async function handlePutStockBack(req, res) {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const productsCollection = db.collection('products');

  const filter = { _id: ObjectId(req.body.id) };
  await productsCollection.updateOne(filter, {
    $inc: { inStock: req.body.count },
  });
  client.close();

  res.status(200).json({ message: 'stock put back' });
}

export default handlePutStockBack;
