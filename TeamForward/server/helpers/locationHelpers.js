const fetch = require("node-fetch");
const User = require("../models/User");
const log = require("../helpers/logging");

const getLocationHelper = async(address) => {
    try {
        const url = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_KEY}&query=${address}`;
        const response = await fetch(url);
        //TODO handle non 200 responses (200 means ok)
        const responseJson = await response.json();
        log(responseJson);
        return responseJson.data;
    } catch (expection) {
        console.log("something went wrong with getLocationHelper function", expection);
    }

};

const getUsersWithinRadius = async (coordinates, radius, interests, activities, userId) => {
    try{
        let splitInterests = interests?.split(",") || [];
        let interestQuery = [];
        for(let interest of splitInterests){
            const queryInterestObject = {};
            queryInterestObject[`interests.${interest}`] = true;
            interestQuery.push(queryInterestObject);
        }

        let splitActivities = activities?.split(",") || [];
        let activityQuery = [];
        for(let activity of splitActivities){
            const queryActivityObject = {};
            queryActivityObject[`activities.${activity}`] = true;
            activityQuery.push(queryActivityObject);
        }

        let findQuery = {
            $and: [
                { _id: { $ne: userId}}
            ]
        };
        if(coordinates.length === 2 && radius){
            findQuery.$and.push({
                location: {
                    $geoWithin: { $centerSphere: [ [coordinates[0], coordinates[1] ], radius/3963.2 ] }
                }
            });
        }
        if (interests){
            findQuery.$and.push({ $or: interestQuery });
        } 
        if (activities){
            findQuery.$and.push({ $or: activityQuery });
        } 

        let results = await User.find(
            findQuery
        );

        return results;
    } catch (expection) {
        console.log("Something went wrong with getUserWithRadius function", expection);
    }  
};

module.exports = {
    getLocationHelper,
    getUsersWithinRadius
};

