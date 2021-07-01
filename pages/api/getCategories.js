import { MongoClient } from 'mongodb';

async function handleGetCategories(req, res) {
  // to call this  fetch('/api/getCategories')

  if (req.method == 'GET') {
    console.log('we got to here');
  }
}

export default handleGetCategories;
