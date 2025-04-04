app.controller('studentController', function($scope, studentService) {
    $scope.students = studentService.getStudents();
  
    $scope.addStudent = function() {
      studentService.addStudent($scope.student);
      $scope.student = {}; // Clear the form
    };
  
    $scope.deleteStudent = function(index) {
      studentService.deleteStudent(index);
    };
  });
  