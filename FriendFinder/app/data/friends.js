// =================================================================================
// DATA
// Below data will hold all of the reserved tables.
// =================================================================================
// Scoring:
// 1 Strongly agree 
// 2 Somewhat agree
// 3 Neutral
// 4 Somewhat disagree 
// 5 Strongly disagree
// Questions:
// 1. I love to help others
// 2. I am ambitious
// 3. I feel uneasy if I am at the center of attention
// 4. I have a messy room
// 5. I approach life in an easy-going manner
// 6. I enjoy videogames
// 7. I tell the truth 
// 8. I do more than what's expected of me
// 8. I like order
// 9. I am easily annoyed
// 10. I really enjoy large parties and gatherings

var friendsArray = [
    {
        "name":"Place holder",
        "photo":"",
        "scores":[
        5, 1, 4, 4, 5, 
        1, 2, 5, 4, 1
        ]
    }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;