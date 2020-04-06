var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// routes

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var ranchRouter = require("./routes/ranchDash");
var fieldDashRouter = require("./routes/fieldsDash");
var editFieldRouter = require("./routes/editField");
var addFieldRouter = require("./routes/addField");
var herdDashRouter = require("./routes/herdDash");
var editHerdRouter = require("./routes/editHerd");
var addHerdRouter = require("./routes/addHerd");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/ranch", ranchRouter);
app.use("/fields", fieldDashRouter);
app.use("/edit-field", editFieldRouter);
app.use("/add-field", addFieldRouter);
app.use("/herds", herdDashRouter);
app.use("/edit-herd", editHerdRouter);
app.use("/add-herd", addHerdRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
