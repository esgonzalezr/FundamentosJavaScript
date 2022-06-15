var students = ["Santiago", "Pedro", "Juan", "David"];

function hiStudents(student) {
  console.log(`Hola, ${student}`);
}

//Loop for
for (var i = 0; i < students.length; i++) {
    hiStudents(students[i]);
}

//Loop for...of
for(var student of students){
    hiStudents(student);
}

//Loop While
while (students.length > 0) {
    var student = students.shift();
    hiStudents(student);
}