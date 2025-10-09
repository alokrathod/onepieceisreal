import mongoose from "mongoose";

const dbconnect = async () => {
  if (mongoose.connection.readyState === 0) {
    console.log(process.env.MONGODB_URI_1);
    await mongoose.connect(process.env.MONGODB_URI_1);
  }
};

export default dbconnect;
