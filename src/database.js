import mongoose from "mongoose";

export async function connect() {
  try {
    const db = await mongoose.connect("mongodb://localhost/graphqlnodemongo", {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`>>> DB ${db.connection.name} is connected`);
  } catch (error) {
    console.error("Something goes wrong!");
    console.error(error);
    throw error;
  }
}
