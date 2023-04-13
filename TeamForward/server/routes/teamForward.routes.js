const UserController = require("../controllers/user.controller");
const LocationController = require("../controllers/location.controller");
const MessagingController = require("../controllers/messages.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  //anonymous routes
  app.post("/teamForward/newUsers", UserController.createNewUser);
  app.post("/teamForward/login", UserController.login);
  app.post("/teamForward/logout", UserController.logOut); 
  
  //autheticated routes

  //User
  app.get("/teamForward/location", authenticate, LocationController.getLocation);
  app.get("/teamForward/loggedInUser", authenticate, UserController.loggedInUser);
  app.get("/teamForward/:id", authenticate, UserController.findOneUser);
  app.get("/teamForward", authenticate, UserController.findAllUsers);
  app.put("/teamForward/:id", authenticate, UserController.updateUser);
  app.delete("/teamForward/:id", authenticate, UserController.deleteUser);

  //Messaging
  app.post("/messaging/chatRoom/:chatRoomId/message", authenticate, MessagingController.createNewMessage);
  app.post("/messaging/chatRoom", authenticate, MessagingController.createNewChatRoom);
  app.get("/messaging/inbox", authenticate, MessagingController.findInbox);
  app.get("/messaging/user/message/unreadCount", authenticate, MessagingController.unreadCount);
  app.get("/messaging/chatRoom/:chatRoomId/allMessages", authenticate, MessagingController.findAllChatRoomMessages);
  app.put("/messaging/message/:messageId/update", authenticate, MessagingController.updateMessage);
  app.delete("/messaging/chatRoom/:chatRoomId/delete", authenticate, MessagingController.deleteChat);
  app.delete("/messaging/chatRoom/message/:messageId/delete", authenticate, MessagingController.deleteMessage);
};
