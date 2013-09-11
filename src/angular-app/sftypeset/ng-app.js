'use strict';

// Declare app level module which depends on filters, and services
angular.module('sftypeset', 
		[
		 'sftypeset.projects',
		 'sftypeset.project',
		 'sftypeset.questions',
		 'sftypeset.question',
		 'sftypeset.filters',
		 'sftypeset.services'
		])
	.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when(
    		'/projects', 
    		{
    			templateUrl: '/angular-app/sftypeset/partials/projects.html', 
    			controller: 'ProjectsCtrl'
    		}
	    );
	    $routeProvider.when(
    		'/project/:projectId', 
    		{
    			templateUrl: '/angular-app/sftypeset/partials/project.html', 
    			controller: 'ProjectCtrl'
    		}
    	);
	    $routeProvider.when(
	    		'/project/:projectId/settings', 
	    		{
	    			templateUrl: '/angular-app/sftypeset/partials/project-settings.html', 
	    			controller: 'ProjectSettingsCtrl'
	    		}
	    	);
	    $routeProvider.when(
    		'/project/:projectId/:textId', 
    		{
    			templateUrl: '/angular-app/sftypeset/partials/questions.html', 
    			controller: 'QuestionsCtrl'
    		}
    	);
	    $routeProvider.when(
	    		'/project/:projectId/:textId/settings', 
	    		{
	    			templateUrl: '/angular-app/sftypeset/partials/questions-settings.html', 
	    			controller: 'QuestionsSettingsCtrl'
	    		}
	    	);
	    $routeProvider.when(
    		'/project/:projectId/:textId/:questionId',
    		{
    			templateUrl: '/angular-app/sftypeset/partials/question.html', 
    			controller: 'QuestionCtrl'
			}
		);
	    $routeProvider.otherwise({redirectTo: 'projects'});
	}])
	.controller('MainCtrl', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
		$scope.route = $route;
		$scope.location = $location;
		$scope.routeParams = $routeParams;
	}])
	;
