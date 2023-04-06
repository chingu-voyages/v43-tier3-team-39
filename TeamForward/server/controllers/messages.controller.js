const User = require("./models/User");
const IndividualMessage = require("../models/Messaging");
const ChatRoom = require("../models/Messaging");
const mongoose = require("mongoose");


module.exports ={

    //CHATROOM
    createNewChatRoom: (req, res) => {
        ChatRoom.create(req.body)
            .then((newChatRoom)=>{
                res.json(newChatRoom);
            }).catch((err) => {
                console.log("createNewChatRoom is not working", err);
            });
    },

    findInbox: (req, res) => {
        ChatRoom.find({
            $expr: {
                $in: {userIds: req.params.userIds}
            }
        })
    }

    findAllUserConversations: async (req, res) => {
        const userInfo = await User.findOne({ _id: req.userId }, { password: 0 });
        let AllChatRoomIds = await ChatRoom.findAll({userIds: userInfo});

        let ConvoQuery = {
            $and: [
                {_id: {}}
            ]
        }
        
        try{
            
        } catch {}
        
    },


    //Messaging
    createNewMessage: (req,res) => {
        IndividualMessage.create(req.body)
            .then((NewMessage) => {
                res.json(NewMessage);
            }).catch((err) =>{
                console.log("createNewMessage is not working", err);
            });
    },

    findMessage: (req, res) => {

    }
}

