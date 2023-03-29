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




