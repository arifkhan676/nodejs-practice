const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello i am working");
});

app.listen(3000, () => {
  console.log("listening port from 3000");
});

const uri =
  "mongodb+srv://nodejsproject:nodejs5500@cluster0.8dsqzra.mongodb.net/nodejsproject?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client.connect((err) => {
  const collection = client.db("nodejsproject").collection("products");
  collection.insertOne({ name: "What", age: 23, religion: "Islam" });
  console.log("database connected");
});

/*

const dbName = client.db("nodejsproject").collection("products");
    await dbName.insertOne({ name: "arif", age: 23, religion: "Islam" });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );



var bodyParser = require("body-parser");
app.use(bodyParser.json());


const users = ["arif", "tajul", "Rafsan"];


app.get("/", (req, res) => {
  res.send("Hello Now I am Node");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const name = users[userId];

  res.send(name);
});

//post
app.post("/addUser", (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user);
});


index-html

    <script>
      const btn = document.getElementById("xyz");

      btn.addEventListener("click", () => {
        const userget = document.getElementById("inp").value;
        const userJson = { userget };

        console.log(userJson);

        fetch("http://localhost:3000/addUser", {
          method: "POST",
          body: JSON.stringify(userJson),
          header: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      });
    </script>

    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>



*/
