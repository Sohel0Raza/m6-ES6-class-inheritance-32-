const student ={
    name: 'Himu',
    age: 21,
    class: 'Ten',
    marks:{
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
const marks = student.marks;
const math = student.marks.math;
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log('subjectMarks :', subjectMarks);
const chemistry = student['marks']['chemistry'];
console.log('chemistry :', chemistry);
