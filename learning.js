const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];

let activeStudents = studentsProgress
    .filter(student => (student.completedLessons/student.totalLessons) >= 0.5 )
    .map(student => ({
            name: student.name,
            completionPercentage: (student.completedLessons/student.totalLessons)*100
    }))

console.log(activeStudents)

let totalCompletionPercentage = activeStudents.reduce((acc, student) => {
    return acc + student.completionPercentage
},0)

let averageCompletionPercentage = totalCompletionPercentage/activeStudents.length

console.log(`Average Completion Percentage : ${averageCompletionPercentage} %`)

let topStudents = activeStudents.filter(student => student.completionPercentage >= 80)

console.log(topStudents)