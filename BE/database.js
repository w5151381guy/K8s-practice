const { MongoClient } = require('mongodb');
require('dotenv').config();

const DEMO_DATABASE = 'demo';
const DEMO_COLLECTION = 'user';
let database;
let collection;

async function main() {
  const uri = process.env.DB_URI;

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    database = client.db(DEMO_DATABASE);
    collection = database.collection(DEMO_COLLECTION);
  } catch (e) {
    console.error(e);
  }
}

main();

async function getData() {
  try {
    const result = await collection.find({}).toArray();
    return result;
  } catch (error) {
    console.error('getData error', error);
    throw error;
  }
}

async function insertData(content) {
  try {
    await collection.insertOne(content);
    return 'ok';
  } catch (error) {
    console.error('insertData error', error);
    throw error;
  }
}

module.exports = { getData, insertData };
