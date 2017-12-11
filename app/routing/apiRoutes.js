
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    
    var tempMin = 41;
    var index = 0;

    for(var i = 0; i < friends.length; i++) {
      var difference = 0;
      for(var j = 0; j < 10; j++){
        difference += Math.abs((req.body).scores[j] - friends[i].scores[j]);  
      };

      // why does the conditional (ternary) operator not work?
      // tempMin = difference < tempMin ? difference : tempMin;
      // index = difference < tempMin ? i : index;
      
      if(difference < tempMin){
        tempMin = difference;
        index = i;
      }
    };

    friends.push(req.body);

    res.json(friends[index]);
  });
};