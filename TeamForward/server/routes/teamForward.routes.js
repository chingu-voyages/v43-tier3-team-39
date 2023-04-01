const UserController = require("../controllers/user.controller");
const LocationController = require("../controllers/location.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/teamForward/newUsers", UserController.createNewUser);
  app.post("/teamForward/login", UserController.login);
  app.post("/teamForward/logout/:id", UserController.logOut);
  // app.get(
  //   "/teamForward/loggedInUser",
  //   authenticate,
  //   UserController.loggedInUser
  // );
  
  app.get("/teamForward/location", LocationController.getLocation);
  app.get("/teamForward/loggedInUser", UserController.loggedInUser);
  app.get("/teamForward/:id", authenticate, UserController.findOneUser);
  app.get("/teamForward", authenticate, UserController.findAllUsers);
  app.get("/teamForward", UserController.findAllUsers);
  // app.put("/teamForward/:id", authenticate, UserController.updateUser);
  app.put("/teamForward/:id", UserController.updateUser);
  app.delete("/teamForward/:id", authenticate, UserController.deleteUser);


};
