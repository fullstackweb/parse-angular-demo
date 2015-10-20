angular.module('app', [
	'ngAnimate', 
	'parse-angular',
	'parse-angular.enhance',
	'ParseServices' /* this is the Parse SDK */, 

])

// hack to disable auto scrolling on hashchange because we're using ui-router to manage states, instead of the core angular router which cannot handle states
// discussion on this here: https://github.com/angular-ui/ui-router/issues/110
.value('$anchorScroll', angular.noop)

.config([ '$locationProvider', '$anchorScrollProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $anchorScrollProvider) {


}])

.run(['ParseSDK', '$rootScope', function(ParseService, $rootScope) {


}]);