import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./modules/users/graphql/resolvers/UsersResolver";
import { ApolloServer } from "apollo-server-express";

async function init() {
  const app = express();
  const port = 4010;
  const schema = await buildSchema({
    resolvers: [UsersResolver],
  });
  const apolloServer = new ApolloServer({
    schema,
  });
  apolloServer.applyMiddleware({ app });
  app.listen(port, () => console.log(`🚀 Server listenning on port ${port}!`));
}

init();
