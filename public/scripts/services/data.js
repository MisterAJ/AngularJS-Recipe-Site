angular.module('app')
.service('dataService', function($http) {
    'use strict';
    this.getRecipes = function(callback) {
        $http.get('/api/recipes')
        .then(callback)
    };
    this.getCategories = function(callback) {
        $http.get('/api/categories')
        .then(callback)
    };
    this.getFoodItems = function(callback) {
        $http.get('/api/fooditems')
        .then(callback)
    };
    this.getRecipesByCategory = function(categoryName, callback) {
        $http.get('/api/recipes?category=' + categoryName)
        .then(callback);
    };
    this.getRecipeByID = function(id, callback) {
        $http.get('/api/recipes/' + id)
        .then(callback)
    };
    this.putRecipeByID = function(id, recipe, callback) {
        $http.put('/api/recipes/' + id, recipe)
        .then(callback)
    };
    this.postRecipe = function(recipe, callback) {
        $http.post('/api/recipes', recipe)
        .then(callback)
    };
    this.deleteRecipeByID = function(id, callback) {
        $http.delete('/api/recipes/' + id)
        .then(callback)
    };
});