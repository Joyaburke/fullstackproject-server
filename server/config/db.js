const mongoose = require("mongoose");
 
function connectDB() {
  const url = "mongodb://127.0.0.1/widgets"; //database(not http), port, database name
 
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);  //kill it, stop the terminal. avoid a loop.
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 // open means the database is connected and ready for commands.

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}

module.exports = connectDB;