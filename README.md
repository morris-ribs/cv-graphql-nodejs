# cv-graphql-nodejs

This is a GraphQL server, coded in NodeJs, that makes queries to retrieves data from a MongoDB instance.

# 1) Launch mongo daemon!

After installing your MongoDB instance, open a cmd window and run the following command:
```
# launch mmongo daemon
$ mongod
```

Your MongoDB instance is up and ready to treat your requests!

# 2) Insert dummy data

Launch Mongo client
```
$ mongo
```

Then, create a DB candidates_test

```
$ use candidates_test
```

Finally, paste the contents of https://github.com/morris-ribs/cv-server-Go/blob/master/candidate_example.json


# 3) Run the server

In the root folder of the project, run
```
$ npm start -s
```

It is going to start the server on the port 3000

# 4) Test it

In a web browser, open http://localhost:3000/graphql/
