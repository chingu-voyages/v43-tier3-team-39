const userController = require("../controllers/user.controller");
const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/users", UserController.createNewUser);
    app.get("/api/users/:id", UserController.findOneUser);
    app.get("/api/users", UserController.findOneUser);
    app.put("/api/users/:id", UserController.updateUser);
    app.delete("/api/users/:id", UserController.deleteUser);
};