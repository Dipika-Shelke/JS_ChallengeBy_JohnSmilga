
const updateStudent = studentData.map(function(student){
    student.role = 'Student';
    return student;
})

//console.log(updateStudent);
const highScore = studentData.filter(function(student){
    if(student.score >= 80){
        return student;
    }
});
//console.log(highScore);
const specificId = studentData.find(function(student){
    return student.id ===3;
});
console.log(specificId);