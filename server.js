const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const mongojs = require("mongojs");


const databaseUrl = "budget";
const collections = ["transactions"];
const db = mongojs(databaseUrl, collections);

var PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(`mongodb+srv://bcermak:${process.env.mongopass}@cluster0.t0gse.mongodb.net/budget?retryWrites=true&w=majority` || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,

});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


db.newdatabase.insert({
  "name2": "this is name2",
  "title": ["item 1", "item2", "item3"],
  "country": "this is country"
})

app.get("/all", (req, res) => {
  db.newdatabase.find({}, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});