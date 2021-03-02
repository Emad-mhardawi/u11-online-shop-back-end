import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("connected  " + connect.connection.host);
  } catch (error) {
    console.log("[error]: " + error.message);
    process.exit(1);
  }
};

export default connectDatabase;
