kiva.factory("kivaAPIService", ["$http", "$q", "_", function($http, $q, _) {
  var _stockObj = {};

  var retrieveStockData = function() {

    var requests = [];
    for(var s in _symbols) {
      requests.push($http.get("/data/" + _symbols[s] + ".json"))
    }

    return $q.all(requests).then( function(response){
      _stockData = []
      for (var i = 0 in response) {
          _stockData.push(response[i].data.query.results.quote);
        }
    }).then(function() {

    });
  }

  var retrieveKivaData = function() {
    var requests = [];
    for(var s in _symbols) {
      requests.push($http.get("/data/" + _symbols[s] + ".json"))
    }
    return $q.all(requests).then( function(response){
      for (var i = 0 in response) {
        _stockObj[response[i].data.query.results.quote[0].Symbol] = {}

        for(var j in response[i].data.query.results.quote) {
          _stockObj[response[i].data.query.results.quote[0].Symbol][response[i].data.query.results.quote[j].Date] =
          response[i].data.query.results.quote[j]
        }
      }
    })
  };



  return {
    retrieveStockData: retrieveStockData,
  }
}])