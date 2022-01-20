const app = require("./index");
const connect = require("./configs/db");
require("dotenv").config();

const port = process.env.PORT || 2346;


app.listen(port, async () => {
  try {
    await connect();
    console.log(`Default port is active on PORT ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
