require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const log = require("./helpers/logging");
const passport = require("passport");
const app = express();
const socketio = require('socket.io')
const port = process.env.PORTKEY;
const ChatController = require("./Controllers/messages.controller")



// configure Passport
require("./Config/passport");

// middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.REDIRECTKEYTWO,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// setting up session cookie with logged in user's database id
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

require("./Config/mongoose.config");
require("./routes/teamForward.routes")(app);

const server = app.listen(port, () => console.log(`listening on port: ${port}`));

const io = socketio(server, {
  cors: {
    // origin needs env variable for test/deployed environments?
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['*'],
      credentials: true,
  }
});

io.on("connection", async (socket) => {
  console.log("New connection at" + socket.id);

  // const chatRooms = await ChatController.findInbox();
  // console.log("server.js, chatRooms call", chatRooms);

  // chatRooms.forEach(chatRoom => socket.join("chatRoom:" + chatRoom._id));
  socket.on("join", (chatRoomId) => {
    console.log("join: " + chatRoomId);
    socket.join(chatRoomId);
  });
  
  // });

  socket.on("clientMessage", (data) => {

    // console.log(data)
    // this should run controller function to add new message
    // into the db

      ChatController.createNewMessage(io, data);
  })
})
// app.use("/", require("./routes/oauth.routes"));
