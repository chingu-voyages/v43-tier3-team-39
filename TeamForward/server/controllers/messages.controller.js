const User = require("../models/User");
const {ChatRoom, IndividualMessage} = require("../models/Messaging");
const mongoose = require("mongoose");


module.exports ={

    //CHATROOM
    createNewChatRoom: (req, res) => {
        // the user id of the person we're starting a chat with
        const { otherUserId } = req.params;
        ChatRoom.create({
            userIds: [req.userId, otherUserId]
        })
        .then((newChatRoom)=>{
            res.json(newChatRoom);
        }).catch((err) => {
            console.log("createNewChatRoom is not working", err);
        });
    },

    findInbox: async (req, res) => {
        try {
            //finds all chatRoom instances where logged in user is listed in userIds
            let ChatRoomList = await ChatRoom.find({
                userIds: {$in: [req.userId]}
                //sorts by updated at date
            }).sort({ updatedAt: -1});

            //create set for all userIds gathered and does not allow duplicates
            let userIdSet = new Set();
            // iterate through each chatRoom to get the user ids listed in userIds array
            for(let oneChatRoom of ChatRoomList){
                for( let userId of oneChatRoom.userIds){
                    // adds userId to set 
                    userIdSet.add(userId);
                }
            }
            // removes the logged in user from the set
            userIdSet.delete(req.userId);
            //turns set into an array
            let userIdArray = Array.from(userIdSet);

            //finds user objects by each _id in userIdArray
            let otherUsers = await User.find({
                _id: {$in: userIdArray}
            });
            let returnList = [];
            //iterate through chatRooms
            for(let oneChatRoom of ChatRoomList){
                //sets otherUserId to _id listed when oneChatRoom.userIds is not the logged in user i.e. other person's id
                let otherUserId = oneChatRoom.userIds.find((userId)=>{
                    return userId !== req.userId;
                });
                //searches through otherUsers array to find where userObject id matches the other person's id and returns true
                let user = otherUsers.find((userObject)=>{
                    return userObject._id === otherUserId;
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

    deleteChat: (req, res) => {
        chatRoom.deleteOne({_id: req.params.chatRoomId})
            .then((deletedChat) => {
                res.json(deletedChat);
            }).catch((err) => console.log("Deleting the chat room failed.", err));
    },

    //Messaging
    createNewMessage: (req,res) => {
        const { message, chatRoomId } = req.body;
        IndividualMessage.create({
            chatRoomId,
            from: req.userId,
            message,
            unread: false
        }).then((NewMessage) => {
            res.json(NewMessage);
        }).catch((err) =>{
            console.log("createNewMessage is not working", err);
        });
    },

    updateMessage: (req, res) => {
        IndividualMessage.findOneAndUpdate(
            {_id: req.params.messageId},
            {unread: false},
            {new: true}
        ).then(
            res.json("message read")
        ).catch((err)=> console.log("update message failed"));
    },

    findAllUserConversations: async (req, res) => {
        try{
            //user sends in chatRoomId
            //findOne chatRoom
            let oneChatRoom = await chatRoom.findOne({chatRoomId: req.params.chatRoomId});
            if(!oneChatRoom){
                res.status(404).json("chatroom could not be found.");
            }
            //find user by chatRoom.userIds
            let otherUserId;
            for(let userId of oneChatRoom.userIds){
                if(userId !== req.userId){
                    otherUserId = userId;
                }
            }
            let otherUserObject = await User.findOne({_id: otherUserId});
            if(!otherUserObject){
                res.status(404).json("The other user could not be found.");
            }
            //find all messages by chatRoomId
            let chatRoomMessages = await IndividualMessage.find({chatRoomId: oneChatRoom._id})
            .sort({ updatedAt: -1});
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
        catch (expection) {
            res.status(500).json("There was a problem with finding this chat room.", expection);
        }
    },

    deleteMessage: (req, res) => {
        IndividualMessage.deleteOne({_id: req.params.messageId})
            .then((deleteMessage) => {
                res.json(deleteMessage);
            }).catch((err) => console.log("Deleting the message room failed.", err));
    },

    //unread counts
    
    unreadCount: (req, res) => {
        IndividualMessage.count({from: req.userId}, {unread: true})
            .then((count)=> {
                res.json(count);
            }).catch(expection)(
                res.status(500).json("There was a problem with find your unread count.", expection)
            );
    }
};

