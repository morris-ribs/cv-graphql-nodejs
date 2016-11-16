# cv-graphql-nodejs
This is a GraphQL server, coded in NodeJs, that makes queries to retrieves data from a MongoDB instance.

# Pre-requisites
- Install MongoDB: https://docs.mongodb.com/manual/installation/?jmp=footer

## Launch mongo daemon!

After installing your MongoDB instance, open a cmd window and run the following command:
```
# launch mmongo daemon
$ mongod
```

Your MongoDB instance is up and ready to treat your requests!

## Insert dummy data

Launch Mongo client, running 
```
# launch mmongo daemon
$ mongo
```

Then, create a db called 'candidates_test'
```
$ use candidates_test
```

Finally, insert the dummy data: https://github.com/morris-ribs/cv-server-Go/blob/master/candidate_example.json
