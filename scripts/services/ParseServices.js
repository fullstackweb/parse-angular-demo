angular.module("ParseServices", []).
factory("ParseSDK", function() {
  					//parse Application ID                      //Parse javascript ID		
  Parse.initialize("ToLY1MqmaM1NUTuTiTQdb4YP6lZ0ukjZQooDig5f", "6Zfhvw4XCvIt4UoqercalaDhUyAiDwCvkZQXNXfb");
  return {
      doTheThing: function methodThatDoesAThing() {
      }
  };
});