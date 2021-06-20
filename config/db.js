// here lets bringing mongoose, use it to connect
const mongoose = require('mongoose');
// and we want to be able to grab that string that we jsut put inside the default.json, so we need also to bring a config package
const config = require('config');
// to get that value, call config.get and we can get any of the values in that json file
const db = config.get('mongoURI');

// to connect to mongo db
// this will give us a promise, we could use the .then .catch syntax, but we will usee async-await because this is new standard and cleaner, and it's makes your codes lookes like synchronous even though it's asynchronous, so we will be using async-await.

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// we will use a arrow function since we nedd sth to call within our server.js
const connectDB = async () => {
  // in here we want to run like I just showed you mongoose.connect but we want to put it inside a try-catch block, the reason for that is if there are some kinds of error, lick if we can not connect, then we need a way to basically have a fail, and show the error message whatever it is
  try {
    // inside the try, since mongoose.connect return a promise, we want to put a await right before , we want to await for that.
    await mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (err) {
    // when sth wrong we just consloe log the error its message property and we want to just escape from the process with failure
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
