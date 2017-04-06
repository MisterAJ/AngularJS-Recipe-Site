angular.module('app')

.controller('RecipesController', function($scope, dataService) {
    $scope.getRecipes = dataService.getRecipes(function (response) {
        $scope.recipes = response.data
    });
    $scope.getCategories = dataService.getCategories(function (response) {
        $scope.categories = response.data
    });
    $scope.getRecipesByCategory = function() {
        dataService.getRecipesByCategory(function (response) {
        $scope.recipes = response.data
        })
    };



});

// TODO Update the RecipesController controller to satisfy the following requirements:
//
// The list of recipes can be filtered by the selected category

// When a recipe “Edit” button is clicked, the user is taken to the “Recipe Detail” screen,
// where they can view and edit the details of the recipe.

// Clicking the recipe “Delete” button deleted that recipes.

// Clicking the recipe “Add” button adds a new recipe