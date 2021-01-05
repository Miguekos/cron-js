const mongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");
// const conexionMongo = "mongodb://10.3.3.122:27017";
const conexionMongo = "mongodb://10.3.3.122:27017";


exports.FIND = async (query, name_collection) => {
  try {
    const client = await mongoClient.connect(conexionMongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("query ", query);
    const db = client.db("CronConfig");
    // const db = client.db(process.env.MDB_NAME);
    const collection = db.collection(name_collection);
    const result = await collection.find(query).toArray();
    return { codRes: result };
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};