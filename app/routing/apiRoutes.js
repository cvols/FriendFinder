var friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        res.json(true);
    })

    app.post("/api/clear", function () {
        friends = []

        console.log(friends)
    })
}