app.controller('studentController', function($scope, studentService) {
  // Load students from the service
  $scope.students = studentService.getStudents();

  // Function to add a student
  $scope.addStudent = function() {
    if ($scope.student && $scope.student.name && $scope.student.age) {
      studentService.addStudent($scope.student); // Add student to service
      $scope.students = studentService.getStudents(); // Refresh displayed list
      $scope.student = {}; // Clear form
    } else {
      alert("Please fill out all fields!");
    }
  };

  // Function to delete a student
  $scope.deleteStudent = function(index) {
    studentService.deleteStudent(index); // Delete student using the service
    $scope.students = studentService.getStudents(); // Refresh list after deletion
  };
});
