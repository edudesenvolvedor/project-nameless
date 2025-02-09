import mongoose from 'mongoose';

const connect = async () => {
  const url: string =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/project';

  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(url);
};

export default connect;
