const express = require("express");
const connectDb = require("./app/utils/MongoConnection");
const cors = require("cors");
const ApiError = require("./app/utils/api-error");
// const productsRouter = require("./route");
const customersRouter = require("./app/router/customer.route");
const testRouter = require("./app/router/testRouter");
connectDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/test", testRouter);
app.use("/api/customer", customersRouter);
// app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.json({ message: "This is test from the server" });
});
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" });
});
module.exports = app;
