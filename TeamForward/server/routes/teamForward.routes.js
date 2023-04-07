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
  //user
  app.get("/teamForward/location", authenticate, LocationController.getLocation);
  app.get("/teamForward/loggedInUser", authenticate, UserController.loggedInUser);
  app.get("/teamForward/:id", authenticate, UserController.findOneUser);
  app.get("/teamForward", authenticate, UserController.findAllUsers);
  app.put("/teamForward/:id", authenticate, UserController.updateUser);
  app.delete("/teamForward/:id", authenticate, UserController.deleteUser);
  //messages
  app.post("/teamForward/chatRoom/Message", authenticate, MessagingController.createNewMessage);
  app.post("/teamForward/newChat/:otherUserId", authenticate, MessagingController.createNewChatRoom);
  app.get("/teamForward/chatRoom", authenticate, MessagingController.findInbox);
  app.put("/teamForward/updateMessage/:messageId", authenticate, MessagingController.updateMessage);
  app.get("/teamForward/chatRoomMessages/:chatRoomId", authenticate, MessagingController.findAllUserConversations);
  app.get("/teamForward/messageUnreadCount", authenticate, MessagingController.unreadCount);
  app.delete("/teamForward/chatRoom/:messageId", authenticate, MessagingController.deleteMessage);
  app.delete("/teamForward/chatRoom/:chatRoomId", authenticate, MessagingController.deleteChat);
};
