// ===============================================================================
// LOAD DATA
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/home", function(req, res) {
        res.json(friends);
    });
      
    app.post("/api/home", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        friends.push(req.body);
        res.json(true);
    });
};
