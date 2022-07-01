// CRUD

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    console.log("Connected correctly");

    const db = client.db(databaseName);
 
    // *-CRUD 
    // Insert => .insertMany(docs, options); .insertOne(doc);
    // Update => .updateMany(filter, updateDoc); .updateOne(filter, updateDoc, options); const options = { upsert: true }; > Bulamazsa Olusturur.
    // FIND => .find(query, options); .findOne(query, options); const query = { title: "The Room" };
    // DELETE => .deleteMany(query); .deleteOne(query); const query = { title: { $regex: "Santa" } };

    // *-COUNT DOCUMENTS
    // .countDocuments(query); const query = { countries: "Canada" };
    // *-Retrieve Distinct Values of a Field
    // .distinct(fieldName, query); const fieldName = "year"; const query = { directors: "Barbra Streisand" };
    // *-Others https://www.mongodb.com/docs/drivers/node/current/usage-examples/command/

    db.collection("users").findOne(
        { _id: new ObjectId("62becf8401b58d07a5e01f6b") },
        (error, result) => {
          if (error) {
            return console.log("Unable to insert user");
          }
  
          console.log(result);
        }
      );

    
    // *-INSERT
    // db.collection("users").insertOne(
    //   {
    //     name: "Mahmut",
    //     age: 12,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.insertedId + "Success");
    //   }
    // );

    // *-FIND
    db.collection("users").findOne(
      { _id: new ObjectId("62becf8401b58d07a5e01f6b") },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }

        console.log(result);
      }
    );
  }
);
