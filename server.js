import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();
app.use(express.static('public'));



let db;
// connect to Mongo DB
MongoClient.connect("mongodb://localhost:27017/candidates_test", (err, database) => {
  if(err) throw err;

  db = database;
  // to do the queries
  app.use('/graphql', GraphQLHTTP({
      schema: schema(db),
      graphiql: true   // to use GraphiQL :)
  }));

  // start server, listening at port 3000
  app.listen(3000, () => console.log('Listening on port 3000'));
});
