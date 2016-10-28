import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

let Schema = (db) => {
  // declaration of our type Candidate
  let candidateType = new GraphQLObjectType({
      name: "Candidate",
      fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
          _id: { type: GraphQLString },
          name: { type: GraphQLString },
          nick: { type: GraphQLString }
      })
  });

  // the schema of the GraphQL queries
  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'Query',
        fields: () => ({
            candidates: {
                type: new GraphQLList(candidateType),
                resolve: () => db.collection("candidates").find({}).toArray()
                // function that GraphQL will execute in order to resolve the field
                // here we get all the candidates from the DB
            }
        })
    })
  });

  return schema
};

export default Schema;
