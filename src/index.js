import express from "express";
import { graphqlHTTP } from "express-graphql";

import { connect } from "./database";
import schema from "./schema";

const app = express();
connect();

app.get("/", (req, res) =>
  res.json({
    message: "Hello world",
  })
);

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
  context: {
    messageId: "Test"
  }
}));

app.listen(3000, () => console.log("Server on port 3000"));
