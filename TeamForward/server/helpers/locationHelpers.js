const fetch = require("node-fetch");

const getLocationHelper = async(address) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_KEY}&query=${address}`;
    const response = await fetch(url);
    //TODO handle non 200 responses (200 means ok)
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data;
}

module.exports = getLocationHelper;


const getUsersWithinRadius = async(centerPoint, body) => {
    //message for testing
    //geoWithin centersphere // users coordinates
    
    //check all users coordinates
        //create list of users within radius
    //return new list

    results = await User.places.find({
        location: {
            $geoWithin: {$centerSphere: [[body.location.coordinates[0], body.location.coordinates[0]]], body.radius /3963.2}
        }});
    return results;

}
module.exports = getUsersWithinRadius;

