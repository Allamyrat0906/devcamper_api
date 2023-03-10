const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
//Router file
const bootcamps = require("./routes/bootcamps");

// Load env  vars
dotenv.config({ path: "./config/config.env" });
const app = express();

//Dev  logging midlewere
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount router
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
