
const updateStudent = studentData.map(function(student){
    student.role = 'Student';
    return student;
})

console.log(updateStudent);