var app=angular.module('testApp',['ngMaterial','ngMessages','lumx']);
app.controller("formController",['$scope',function($scope){
          $scope.user={};
		  $scope.selectPeople = [
        {
            name: 'Adam',
            email: 'adam@email.com',
            age: 10
        },
        {
            name: 'Amalie',
            email: 'amalie@email.com',
            age: 12
        },
        {
            name: 'Wladimir',
            email: 'wladimir@email.com',
            age: 30
        },
        {
            name: 'Samantha',
            email: 'samantha@email.com',
            age: 31
        },
        {
            name: 'Estefanía',
            email: 'estefanía@email.com',
            age: 16
        },
        {
            name: 'Natasha',
            email: 'natasha@email.com',
            age: 54
        },
        {
            name: 'Nicole',
            email: 'nicole@email.com',
            age: 43
        },
        {
            name: 'Adrian',
            email: 'adrian@email.com',
            age: 21
        }];
          
$scope.click=function(){
          
          $scope.user = {
      name: 'Developer',
      mail: 'ipsum@lorem.com',
      phone: '9876543210'
          };
          };
          $scope.clear=function(){
                     $scope.user = {
      name: '',
      mail: '',
      phone: ''
          };
          };
}]);

