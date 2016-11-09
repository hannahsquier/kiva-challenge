var kiva = angular.module("kiva", ["ui.router"])

kiva.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

kiva.factory("_", [ "$window", function($window) {
  return $window._;
}])

kiva.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state("home",{
    url: "/",
    views: {
      "charts": {
        templateUrl: "js/templates/charts.html",
        controller: "chartsCtrl"
      },

      "table": {
          templateUrl: "js/templates/table.html",
          controller: "tableCtrl"
        },

    }
  });


})