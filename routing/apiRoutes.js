const friends = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

	app.post('/api/friends', function(req, res) {
    // Creating object to hold the best match
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    // Parsing user input from the form
    var newPerson = req.body;
    var newUserName = newPerson.name;
    var newUserPhoto = newPerson.photo;
    var newUserScores 	= newPerson.scores;
    var totalDifference = 0;

    // Loop through each friend in the list
    for  (let i = 0; i < friends.length; i++) {
        totalDifference = 0;
        // Loop through the score array of each friend
        for (let j = 0; j < friends[i].scores[j]; j++){
            // Calculate the absolute value difference between the user's score and the current friend 
            // score as a summation called totalDifference
            totalDifference += Math.abs(parseInt(newUserScores[j]) - parseInt(friends[i].scores[j]));
            // If the new summation of the differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend. 
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }
    // Finally save the user's data to the database
    friends.push(newPerson);
    // Return a JSON with the user's bestMatch
    res.json(bestMatch);
    });
};
