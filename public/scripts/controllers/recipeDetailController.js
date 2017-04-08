angular.module('app')
.controller('RecipeDetailController', function ($location, $scope, dataService) {
    $scope.getFoodItems = dataService.getFoodItems(function(response) {
        $scope.foodItems = response.data
    });

    $scope.getCategories = dataService.getCategories(function (response) {
        $scope.categories = response.data
    });

    let url = $location.url();
    let id = url.replace('/edit/', '');
    let newRecipe = false;

    console.log(id);

    if(id !== '/add') {
        newRecipe = false;
        $scope.getRecipe = dataService.getRecipeByID(id, function (response) {
            $scope.recipe = response.data
        });
    } else {
        newRecipe = true;
        $scope.recipe = {
            name: 'Add New Recipe',
            description: '',
            category: '',
            prepTime: '',
            cookTime: '',
            ingredients: [],
            steps: [],
            _id: ''
        };
        $scope.recipe._id = Math.floor((Math.random() * 999999999) + 1).toString();
        id = $scope.recipe._id
    }

    $scope.save = function() {
            if(newRecipe){
                dataService.postRecipe($scope.recipe,function (response) {
                    $location.url('/')
                })
            }
            else {
                dataService.putRecipeByID(id, $scope.recipe,function (response) {
                    $location.url('/')
                })
            }
    };

    $scope.cancel = function () {
        $location.url('/')
    };
    
    $scope.deleteIngredient = function ($index) {
        $scope.recipe.ingredients.splice($index, 1);
    };

    $scope.deleteStep = function ($index) {
        $scope.recipe.steps.splice($index,1);
    };

    $scope.newIngredient = function () {
        "use strict";
        $scope.recipe.ingredients.push({
            foodItem: '',
            condition: '',
            amount: ''
        })
    };
    
    $scope.newStep = function () {
        $scope.recipe.steps.push({
            description: ''
        })
    };

    $scope.checkRecipe = function (recipe) {
        let validName = recipe.name.$valid;
        let validDescription = recipe.description.$valid;
        let validCategory = recipe.category.$valid;
        let validPrepTime = recipe.prepTime.$valid;
        let validCookTime = recipe.cookTime.$valid;
        let validIngredients = recipe.ingredients.length > 0;
        let validSteps = recipe.steps.length > 0;
    }

});
