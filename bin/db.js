const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    /* eslint-disable no-console */
    console.log('MongoDb connected...');
  } catch (error) {
    console.error(`Error : ${error.message}`);
    /* eslint-enable no-console */
    process.exit(1);
  }
};

module.exports = connectDB;
