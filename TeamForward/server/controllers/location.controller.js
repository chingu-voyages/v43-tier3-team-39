const fetch = require("node-fetch");

module.exports = {

    getLocation: async(req, res) =>{
        //req is a full address or zipcode
        //if using full address need mechanism to feed back address options and select the correct one.
        const address = "98034";
        //TODO: get address of of request ie user.address
        const url = `http://api.positionstack.com/v1/forward?access_key=7dbf92a9dd292f2dca1c48b8aaf4bd6e&query=${address}`;
        //TODO: make key in URL env variable
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        res.json(responseJson);
    }
}