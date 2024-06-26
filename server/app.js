const express = require("express");
const { API_VERSION } = require("./constants");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Import routings
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const menuRoutes = require("./router/menu");
const solicitudRoutes = require("./router/solicitud");
const documentoRoutes = require("./router/documento");
const newsletterRoutes = require("./router/newsletter");
//Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Configure static folder
app.use(express.static("uploads"));
//Configure Header HTTP - CORS
app.use(cors());
//Configure routings
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, solicitudRoutes);
app.use(`/api/${API_VERSION}`, documentoRoutes);
app.use(`/api/${API_VERSION}`, newsletterRoutes);
module.exports = app;