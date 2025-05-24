import { MongoClient, ServerApiVersion } from "mongodb";

function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGO_URI;
  console.log(uri);

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.NEXT_PUBLIC_DB_NAME).collection(collectionName);
}

export default dbConnect;
