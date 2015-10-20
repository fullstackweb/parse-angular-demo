
angular.module('app')

.controller('PlayerController', ['$rootScope',  '$scope', function($rootScope, $scope) {
    
  // this controller controls navigation, navigation animations, menu and master-detail layout

  var query = new Parse.Query("Player");
	query.limit("200");
	query.first()
	query.find({
    success: function(results) {
    	//console.log(results);
    	$scope.players = results;
    },

    error: function() {
    	console.log("an error was encountered");
    }
  });

  $scope.player = {
    name: null,
    rating: null
  };

  $scope.savePlayer = function() {
    toSaveObj = $scope.player;
    console.log(toSaveObj);
    
    /*parse code for saving data*/
    var Player = Parse.Object.extend("Player");

    //Instantiate an object of the ListItem class
    var Player = new Player();

    //listItem is now the object that we want to save, so we assign the properties that we want on it.
    Player.set("name", toSaveObj.name);
    Player.set("rating", parseInt(toSaveObj.rating));

    //We call the save method, and pass in success and failure callback functions.
    Player.save(null, {       
      success: function(item) {
          $scope.players.push(item);
          $scope.$apply();
      },
      error: function(player, error) {
        //Failure Callback
        console.log(error);
      }
    });

  };



}]);