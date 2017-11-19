var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()
var PORT = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

var friends = require("./app/data/friends")

app.post('/survey', function (req, res) {
    var newUser = req.body
    res.json(newUser)

    repeatEach(newUser)
})

var scoreDiff = []
var bestMatch

function repeatEach(newUser) {
    scoreDiff = []
    
    for (j = 0; j < friends.length; j++) {
        compare(friends[j], newUser)
    }

    console.log(friends[bestMatch])
}

function compare(oldUser, newUser) {
    var total = 0
    var z = []
    var x
    var y

    for (var i = 0; i < 2; i++) {
        x = oldUser.scores
        
        y = newUser.scores
        
        z.push(Math.abs(x[i] - Math.abs(y[i])))
        console.log(z)
        total += z[i]
    }

    scoreDiff.push(total)
    bestMatch = scoreDiff.indexOf(Math.min.apply(null, scoreDiff))
}

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT)
})

