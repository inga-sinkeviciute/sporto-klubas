import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    mongoose.set(`strictQuery`, false);
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    if (connection) console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:" + error);
  }
};

export default connectMongoDB;
