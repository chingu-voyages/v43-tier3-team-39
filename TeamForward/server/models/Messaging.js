const mongoose = require("mongoose");
const User = require("./User");

const ChatRoomSchema = new mongoose.Schema ({
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
}, {timestamps: true});

const IndividualMessageSchema = new mongoose.Schema({
    chatRoomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatRoom',
        required: true
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String
    }, 
    unread: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

const IndividualMessage = mongoose.model("IndividualMessage", IndividualMessageSchema);
const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);

module.exports={IndividualMessage, ChatRoom};