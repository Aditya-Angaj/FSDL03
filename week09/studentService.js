app.service('studentService', function() {
    var students = [];
  
    this.getStudents = function() {
      return students;
    };
  
    this.addStudent = function(student) {
      students.push(student);
    };
  
    this.deleteStudent = function(index) {
      students.splice(index, 1);
    };
  });
  