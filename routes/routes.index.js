var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", page: "Home" });
});
/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "About Me", page: "About" });
});
/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects", page: "Projects" });
});
/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services", page: "Services" });
});
/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact", page: "Contact" });
});

module.exports = router;
