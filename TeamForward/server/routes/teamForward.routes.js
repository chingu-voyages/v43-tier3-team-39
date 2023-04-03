const UserController = require("../controllers/user.controller");
const LocationController = require("../controllers/location.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  //anonymous routes
  app.post("/teamForward/newUsers", UserController.createNewUser);
  app.post("/teamForward/login", UserController.login);
  app.post("/teamForward/logout", UserController.logOut); 
  
  //autheticated routes
  app.get("/teamForward/location", authenticate, LocationController.getLocation);
  app.get("/teamForward/loggedInUser", authenticate, UserController.loggedInUser);
  app.get("/teamForward/:id", authenticate, UserController.findOneUser);
  app.get("/teamForward", authenticate, UserController.findAllUsers);
  app.put("/teamForward/:id", authenticate, UserController.updateUser);
  app.delete("/teamForward/:id", authenticate, UserController.deleteUser);


};
