const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
    return mongoose.connect(
      process.env.databaseLINK,
      { useNewUrlParser: true, useUnifiedTopology: true },
      // () => console.log("Connected")
    );
    
  
};

// module.exports = () => {
//   try {
//     return mongoose.connect("mongodb://127.0.0.1:27017/project");

//   } catch (e) {
//     return console.error(e.message);
//   }
// }
