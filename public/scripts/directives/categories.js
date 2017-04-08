angular.module('app')
    .directive('categoriesDirective', function () {
        return {
            template: `<option value="All">All Categories</option>
                       <option ng-repeat="category in categories" value="{{category.name}}">{{category.name}}</option>`
        }
    });
