const express = require("express");
const loadEnvironment = require('./loadEnvironment');
const bodyParser = require("body-parser");
const cors = require('cors');
const { connectDB } = require("./config/dbConfig");
const PORT = process.env.PORT;

connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  exposedHeaders: ['X-Total-Count']
}))
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
