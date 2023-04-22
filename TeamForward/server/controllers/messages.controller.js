const User = require("../Models/User");
const {ChatRoom, IndividualMessage} = require("../models/Messaging");
const mongoose = require("mongoose");


module.exports ={

    //CHATROOM
    createNewChatRoom: async (req, res) => {
        const { otherUserId } = req.body;
        // console.log("controller user objects", req.userId, otherUserId)
        let chatRoomExists = await ChatRoom.findOne({userIds: {$all:[req.userId, otherUserId]}})

        if(chatRoomExists){
            // console.log("Chat room already exists:",chatRoomExists)
            res.json(chatRoomExists);
        } else{
            try{
                // console.log("Creating new chatroom...")
                let newChatRoom = await ChatRoom.create({
                    userIds: [new mongoose.Types.ObjectId(req.userId), new mongoose.Types.ObjectId(otherUserId)]
                });
                res.json(newChatRoom);
            } catch(err){
                console.log("createNewChatRoom is not working", err);
            }
        }
    },

    findInbox: async (req, res) => {
        try {
            //finds all chatRoom instances where logged in user is listed in userIds
            let chatRoomList = await ChatRoom.find({
                // userIds: {$in: [req.userId]}
                userIds: {$in: [new mongoose.Types.ObjectId(req.userId)]}
                //sorts by updated at date
            }).sort({ updatedAt: -1});

            //create set for all userIds gathered and does not allow duplicates
            let userIdSet = new Set();
            // iterate through each chatRoom to get the user ids listed in userIds array
            chatRoomList.forEach(oneChatRoom => {
                for( let userId of oneChatRoom.userIds){
                    // adds userId to set 
                    userIdSet.add(userId.toString());
                }
            });
            // removes the logged in user from the set
            userIdSet.delete(req.userId);
            //turns set into an array
            let userIdArray = Array.from(userIdSet).map((oneUserId)=> new mongoose.Types.ObjectId(oneUserId));

            //finds user objects by each _id in userIdArray
            let otherUsers = await User.find({
                _id: {$in: userIdArray}
            }, {password: 0});
            let returnList = [];
            let otherUserId;
            let user;

            //iterate through chatRooms
            for(let oneChatRoom of chatRoomList){
                //sets otherUserId to _id listed when oneChatRoom.userIds is not the logged in user i.e. other person's id
                otherUserId = oneChatRoom.userIds.find((userId)=>{
                    return userId.toString() !== req.userId;
                });
                //searches through otherUsers array to find where userObject id matches the other person's id and returns true
                user = otherUsers.find((userObject)=>{
                    return userObject._id.toString() === otherUserId.toString();
                });
                if( otherUserId !== undefined && user !== undefined){
                    returnList.push({
                        ChatRoomInfo: oneChatRoom, 
                        userObject: user
                    });
                }
            }
            res.json(returnList);
        } 
        catch(expection){
            console.log("something went wrong with findInbox", expection);
        }
    },

    deleteChat: async (req, res) => {
        try{
            // console.log(req.params);
            let messagesDeleted = await IndividualMessage.deleteMany({chatRoomId: req.params.chatRoomId});
            let chatRoomDeleted = await ChatRoom.deleteOne({_id: req.params.chatRoomId});
            res.status(200).json({ messagesDeleted, chatRoomDeleted });
        }
        catch(err){
            console.log("Deleting the chat room failed.", err);
        }
    },

    //Messaging
    createNewMessage: (io,data) => {
        const { message, to, chatRoomId, from } = data;
        IndividualMessage.create({
            chatRoomId,
            from,
            to,
            message
        }).then((newMessage) => {
            io.to(chatRoomId).emit("message",newMessage);
            // res.json(newMessage);
        }).catch((err) =>{
            console.log("createNewMessage is not working", err);
        });
    },

    updateMessage: (req, res) => {
        IndividualMessage.findOneAndUpdate(
            {_id: req.params.messageId, to: req.userId},
            {unread: false},
            {new: true}
        ).then(
            res.json("message read")
        ).catch((err)=> console.log("update message failed"));
    },

    findAllChatRoomMessages: async (req, res) => {
        try{
            //user sends in chatRoomId
            //findOne chatRoom
            let oneChatRoom = await ChatRoom.findOne({_id: req.params.chatRoomId});
            if(!oneChatRoom){
                res.status(404).json("chatroom could not be found.");
            }
            //find user by chatRoom.userIds
            let otherUserId;
            for(let userId of oneChatRoom.userIds){
                if(userId.toString() !== req.userId){
                    otherUserId = userId;
                }
            }
            let otherUserObject = await User.findOne({_id: otherUserId}, {password: 0});
            if(!otherUserObject){
                res.status(404).json("The other user could not be found.");
            }
            //find all messages by chatRoomId
            let chatRoomMessages = await IndividualMessage.find({chatRoomId: oneChatRoom._id})
            .sort({ createdAt: 1});
            if(!chatRoomMessages){
                res.status(404).json("Your messages could not be found.");
            }
            //package into object and send to UI
            let chatRoomInfo = [{
                chatRoom: oneChatRoom,
                otherUser: otherUserObject,
                messages: chatRoomMessages
            }];
            res.json(chatRoomInfo);
        }
        catch (err) {
            console.error(err);
            res.status(500).json("There was a problem with finding this chat room.");
        }
    },

    deleteMessage: (req, res) => {
        IndividualMessage.deleteOne({_id: req.params.messageId})
            .then((deleteMessage) => {
                res.json(deleteMessage);
            }).catch((err) => console.log("Deleting the message room failed.", err));
    },

    //TODO - add a unread message in chatroom controller
    
    //unread counts
    unreadCount: async(req, res) => {
        try{
            let count = await IndividualMessage.count({to: req.userId, unread: true});
            res.json(count);
        }
        catch(err) {
            console.error(err);
            res.status(500).json("There was a problem with find your unread count.");
        }
    }
};
