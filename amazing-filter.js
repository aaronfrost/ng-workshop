angular.module('app').filter('amazing', function(){
  return function(input){
    if (input){
      return input
        .replace(/tonto|aburrido|lento|menso/g, 'ASOMBROSO');
    }
  }
});