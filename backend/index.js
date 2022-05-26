import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config({ silent: true });

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

// console.log(process.env.RESTREVIEWS_DB_URI);

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });
