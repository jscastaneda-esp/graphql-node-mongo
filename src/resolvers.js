import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
  Query: {
    hello() {
      return "Hello world with GraphQL";
    },
    greet(_, { name }, context) {
      return `Hello ${name}`;
    },
    tasks() {
      return tasks;
    },
    async users() {
      return await User.find();
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const user = new User(input);
      await user.save();
      console.log(user);
      return user;
    },
    async updateUser(_, { id, input }) {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      return user;
    },
    async deleteUser(_, { id }) {
      const user = await User.findByIdAndDelete(id);
      return user;
    },
  },
};
