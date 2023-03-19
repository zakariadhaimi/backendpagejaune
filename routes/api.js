var express = require("express");
var profilRouter = require("./Profils");
var jobRouter = require("./Jobs");
var userRouter = require("./Users");
var demandeRouter = require("./Demandes")
var commentsRouter = require('./comments')
var app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use("/job/", jobRouter);
app.use("/profil/", profilRouter);
//app.use("/job/", jobRouter);
app.use("/user/", userRouter);
app.use("/demande",demandeRouter)
app.use("/comments/", commentsRouter);


module.exports = app;
