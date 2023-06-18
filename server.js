// This is our main server to connect all the routers.
// Author: Shuo, Amka, Deepa, Gabriel
// When: June 2023

const express = require("express");
const session = require("express-session");
const indexRouter = require("./indexRoutes");
const contactRouter = require("./contactRoutes");
const loginRouter = require("./loginRoutes");
const userRouter = require("./userRoutes");
const registerRouter = require("./registerRoutes")
const packagesRouter = require("./packagesRoutes")
const bookingRouter = require("./bookingRoutes")
const policyRouter = require("./policyRoutes")
const app = express();

// Start the server
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

// Middleware for ejs and static directory.
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Create session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware to set session variables for navbar display.
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn || false;
  res.locals.userProfile = req.session.userProfile || null;
  res.locals.customerId = req.session.customerId || null;
  next();
});

// Adding all the router to root directory
app.use("/", indexRouter);
app.use("/", contactRouter);
app.use("/", loginRouter);
app.use("/", userRouter);
app.use("/", registerRouter)
app.use("/", packagesRouter)
app.use("/", bookingRouter)
app.use("/", policyRouter)
