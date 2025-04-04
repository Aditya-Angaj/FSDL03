app.service('studentService', function() {
  var students = []; // Array to store student data

  // Return the list of students
  this.getStudents = function() {
    return students;
  };

  // Add a student to the array
  this.addStudent = function(student) {
    students.push(student);
  };

  // Remove a student from the array
  this.deleteStudent = function(index) {
    students.splice(index, 1);
  };
});

  
