import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
  scalar Date

  type Task {
    _id: ID!
    title: String!
    description: String!
    number: Int
  }

  type User {
    _id: ID!
    firstname: String!
    lastname: String
    age: Int
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    hello: String
    greet(name: String!): String
    tasks: [Task!]
    users: [User!]
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

  input UserInput {
    firstname: String!
    lastname: String
    age: Int
  }

  input UserUpdateInput {
    firstname: String
    lastname: String
    age: Int
  }

  type Mutation {
    createTask(input: TaskInput!): Task
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    deleteUser(id: ID!): User
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
