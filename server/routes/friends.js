import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

const friends = [
  {
    id: 1,
    firstName: "Test",
    lastName: "Test",
    email: "Test@email.com",
  }
]

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  // let collection = await db.collection("users");
  // let results = await collection.find({}).toArray();
  // res.send(results).status(200);
  res.send({
    message: "Successful Get Request",
    friends
  }).status(200);
  
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  // let collection = await db.collection("users");
  // let query = { _id: new ObjectId(req.params.id) };
  // let result = await collection.findOne(query);

  // if (!result) res.send("Not found").status(404);
  // else res.send(result).status(200);
  res.send({
    message: `Successful Get Request id: ${req.params.id}`,
    friends
  }).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    // let newDocument = {
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   email: req.body.email,
    // };
    // let collection = await db.collection("users");
    // let result = await collection.insertOne(newDocument);
    // res.send(result).status(204);
    res.send({
      message: "Successful Post Request",
      friends
    }).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    // const query = { _id: new ObjectId(req.params.id) };
    // const updates = {
    //   $set: {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //   },
    // };

    // let collection = await db.collection("users");
    // let result = await collection.updateOne(query, updates);
    // res.send(result).status(200);
    res.send({
      message: "Successful Patch Request",
      friends
    }).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating users");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    // const query = { _id: new ObjectId(req.params.id) };

    // const collection = db.collection("users");
    // let result = await collection.deleteOne(query);

    // res.send(result).status(200);
    res.send({
      message: "Successful Delete Request",
      friends
    }).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;