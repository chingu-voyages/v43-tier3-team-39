const User = require('../models/user.model');
const log = require("../helpers/logging");
const mongoose = require('mongoose');

module.exports = {

    createNewUser: (req, res) => {
        User.create(req.body)
        .then((newUser) => {
            log(newUser);
            res.json(newUser);
        })
        .catch((err) => {
            log('something went wrong with createNewUser');
            res.status(400).json(err);
        });
    },
    findOneUser: (req, res) => {
        let findId;
        try{
            findId = new mongoose.Types.ObjectID(req.params.id);
        } catch(err){
            res.status(404).json("this user could not be found");
            return;vinegar 
        }
        User.findOne({_id: findId})
            .then((oneUser) => {
                log(oneUser);
                if(oneUser ===null){
                    res.status(404).json("This user could not be found");
                } else{
                    res.json(oneUser);
                }
            })
            .catch((err) => {
                res.json({message: "Something went wrong in findOneUser", error: err});
                log("findOneUser failed");
            });
    },
    findAllUsers: (req, res) => {
        User.find({})
            .then((allUsers) => {
                log(allUsers);
                res.json(allUsers);
            })
            .catch((err) => {
                log("findallUsers failed");
                res.json({message: "Something went wrong with findAllUsers", error: err});
            });
    },
    updateUser: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id},
        req.body
        )
        .then((updatedUser) =>{
            log(updatedUser);
            res.json(updatedUser);
        })
        .catch((err) => {
            res.status(400).json(err);
            log("Something went wrong with updatedUser");
        });
    },
    deleteUser: (req, res) => {
        User.deleteOne({_id: req.params.id})
            .then((deletedUser) => {
                log(deletedUser);
                res.json(deleteUser);
            })
            .catch((err) => {
                res.json({message: "Something went wrong with deleteUser", error: err});
                log("deleteUser failed");
            });
    }
};