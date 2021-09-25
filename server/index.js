require('dotenv').config()
const express = require("express");
const cors = require("cors");
const github = require('./routers/githubRoute')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", github);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
