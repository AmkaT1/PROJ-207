const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("index", { pageTitle: "Home" });
});

module.exports = router;
