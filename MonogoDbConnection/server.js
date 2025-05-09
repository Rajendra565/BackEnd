const Http = require("http");
const mongodb = require("mongodb").MongoClient;

const createserver = Http.createServer(async (req, res) => {
  try {
    // Connect to MongoDB
    const connection = await mongodb.connect("mongodb://localhost:27017");
    const db = connection.db("nodejs");
    const collection = db.collection("user");
    // Insert data into the collection
    let data = await collection.insertMany([
      { name: "pabitra", age: 30 },
      { name: "Rajendra kumar", age: 25 },
      { name: "Rajesh", age: 22 },
    ]);
    // this is for update data

    // collection.updateOne(
    //   { name: "John" },
    //   { $set: { age: 31 } },
    //   { upsert: true }
    // );

    // collection.updateMany({ $set: { age: 31 } }, { upsert: true });

    // this is for delete data
    // collection.deleteOne({ name: "pabitra" });
    collection.deleteMany();
    // collection.deleteMany([{ name: ["John", "doe"] }]);

    // this is for find data
    // const datalisten = collection.find({ name: "Rajendra" }).toArray();

    console.log("Data inserted:", data.toString());

    // Send a response to the client
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Data inserted successfully!");
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("An error occurred!" + error);
  }
});

createserver.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
