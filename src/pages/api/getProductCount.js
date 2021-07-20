import { MongoClient } from 'mongodb';

async function handleGetProductCount(req, res) {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const productsCollection = db.collection('products');
  const results = await productsCollection.find().toArray();
  client.close();

  let productCounts = results.reduce((acc, cur) => {
    acc[cur._id.toString()] = { inStock: cur.inStock };
    return acc;
  }, {});

  res.status(200).json(productCounts);
}

export default handleGetProductCount;
