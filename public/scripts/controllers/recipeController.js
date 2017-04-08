angular.module('app')

.controller('RecipesController', function($rootScope, $location, $scope, dataService) {
    $scope.getCategories = dataService.getCategories(function (response) {
        $scope.categories = response.data
    });
    $scope.getRecipes = function() {
        dataService.getRecipesByCategory($scope.selectedCategory, function(response) {
            $scope.recipes = response.data
        });
    };
    $scope.editRecipe = function (recipe) {
        $location.url('/edit/' + recipe._id);
    };
    $scope.deleteRecipe = function (recipe) {
        dataService.deleteRecipeByID(recipe._id, function (response) {
            $location.url('/')
        })
    };
    $scope.addRecipe = function () {
        $location.url('/add/')
    }

});