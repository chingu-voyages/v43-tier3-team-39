const userController = require("../controllers/user.controller");
const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/teamForward/users", UserController.createNewUser);
    app.post("/teamForward/login", UserController.login);
    app.post("/teamForward/logout/:id", UserController.logOut);
    app.get("/teamForward/loggedInUser", authenticate, UserController.loggedInUser);
    app.get("/teamForward/:id", authenticate, UserController.findOneUser);
    app.get("/teamForward", authenticate, UserController.findAllUsers);
    app.put("/teamForward/:id", authenticate, UserController.updateUser);
    app.delete("/teamForward/:id", authenticate, UserController.deleteUser);
};