angular.module('app')
    .directive('categoriesDirective', function () {
        return {
            template: `<option ng-repeat="category in categories" value="{{category.name}}">{{category.name}}</option>`
        }
        $scope.recipes = $scope.getRecipesByCategory()
    });