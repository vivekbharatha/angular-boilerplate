/**
 * Created by Vivek Bharatha on 16/1/16.
 */
app.config(function($routeProvider) {
    $routeProvider.otherwise('/');

    $routeProvider
        .when('/home', {
            templateUrl: 'app/components/home/home.html'
        })
    });