let app = angular.module('passwordStrength', []);

app.controller('levelsCtrl', function($scope) {
  $scope.password = '';
  $scope.level ='';

  $scope.updatePasswordStrength = function() {
    const password = $scope.password;
    const length = password.length;

    if (length === 0) {
      $scope.level = '';
    
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
      $scope.level = 'hard';
    } else if (length > 8 && ((/[a-zA-Z]/.test(password) && /[0-9]/.test(password) )|| (/[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) || (/[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)))){
      $scope.level = 'medium';
    } else if ( length > 8 && (/[a-zA-Z]/.test(password) ||  /[0-9]/.test(password) ||  /[^a-zA-Z0-9]/.test(password))) {
      $scope.level = 'easy';
    } else if (length < 8) {
      $scope.level = 'small';}
  };
});
