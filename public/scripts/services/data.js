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
    this.getRecipesByCategory = function(callback) {
        $http.get('/api/recipes?category={category}')
        .then(callback)
    };
    this.getRecipeByID = function(callback) {
        $http.get('/api/recipes/{id}')
        .then(callback)
    };
    this.putRecipeByID = function(callback) {
        $http.put('/api/recipes/{id}')
        .then(callback)
    };
    this.postRecipes = function(callback) {
        $http.post('/api/recipes')
        .then(callback)
    };
    this.deleteRecipeByID = function(callback) {
        $http.delete('/api/recipes/{id}')
        .then(callback)
    };
});