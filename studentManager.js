function createStudentManager(){
    let students = {
        Vishranti: [85,96,79],
        Mishra: [23,45,66],
        Manasvi: [20,43,43],
        Komal: [36,60,55]
    }

    let calculateAverage = (scores) => scores.length > 0 ? (scores.reduce((sum, scores) => sum + scores, 0))/scores.length : 0

    let addStudent = (name, initialScores =[]) => {
        if(name in students){
            return "Student already exists!"
        }
        students[name] = initialScores
        return "Student added successfully"
    }

    let updateStudent = (name, newScores) => {
        if(name in students){
            students[name] = newScores
            return "Student updated successfully"
        }
        return "Student not found!"
    }
    let getStudentDetails = (name) => {
        if(name in students){
            let scores = students[name]
            return {name, scores, average: calculateAverage(scores)}
        }
        return "Student not found!"
    }
    let addSubject = (name, newScores) => {
        if(name in students){
            students[name].push(newScores)
            return "Subject added successfully"
        }
        return "Student not found"
    }
    
    let studentReport = () => {
        return Object.keys(students).map((name) => ({
            name,
            average: calculateAverage(students[name])
        }))
    }

    let topPerformers = (minScore = 85) => {
        return studentReport().filter(student => student.average > minScore)
    }

    let getDifficultSubjects = (below = 40) => {
        let studentNames = Object.keys(students)
        console.log(studentNames)
        let numSubjects = students[studentNames[0].length]
        console.log(numSubjects)
        let difficultSubjects = []
        // later
    }

    let failedInAny = (passingMarks = 35) => {
        return Object.entries(students)
            .filter(entry => entry[1].some(score => score < passingMarks))
            .map(entry => entry[0])
    }

    let getSortedStudents = function (sortBy = "name"){
        let reports = studentReport()
        if(sortBy == "name"){
            return reports.sort(function(a, b) {
                return a.name.localeCompare(b.name)
            })
        }else if(sortBy == "average"){
            return reports.sort(function(a ,b) {
                return a.average - b.average
            })
        }else{
            return "Invalid argument"
        }
    }


    return {
        addStudent,
        updateStudent,
        getStudentDetails,
        addSubject,
        studentReport,
        topPerformers,
        getDifficultSubjects,
        failedInAny,
        getSortedStudents
    }
}

let studentManager = createStudentManager()

console.log(studentManager.addStudent("Devesh", [56,76,87]))
console.log(studentManager.updateStudent("Devesh", [23,34,54]))
console.log(studentManager.getStudentDetails("Devesh"))
console.log(studentManager.addSubject("Devesh", 76))
console.log(studentManager.addSubject("Vishranti", 92))
console.log(studentManager.getStudentDetails("Devesh"))
console.log("Report: ", studentManager.studentReport())
console.log("Top Perfomers", studentManager.topPerformers())
console.log("Difficult Subjects", studentManager.getDifficultSubjects())
console.log("Failed Students:  ", studentManager.failedInAny())
console.log("Sorted by name: ", studentManager.getSortedStudents("name"))
console.log("Sorted by average: ", studentManager.getSortedStudents("average"))

