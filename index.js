const express = require("express");
const dotenv = require("dotenv");
const defaultRouter = require("./src/routes/default");
// Initialize environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT;
// endpoint
app.use("/", defaultRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
