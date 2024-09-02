const { Router } = require("express");
const {
  getUsersHandler,
  createUserHandler,
  getUserHandler,
} = require("../handler/userHandlers");
const userRoutes = Router();

// Users
userRoutes.get("/", getUsersHandler);
userRoutes.get("/:id", getUserHandler);
userRoutes.post("/", createUserHandler);

module.exports = userRoutes;
