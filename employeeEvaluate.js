function evaluateEmployees(employees) {
    return employees
        .filter(emp => emp.tasksCompleted > 5) 
        .map(emp => ({
            name: emp.name,
            performance: emp.rating > 4.5 ? "Excellent" : emp.rating >= 3 ? "Good" : "Needs Improvement"
        }))
        .sort((a, b) => {
            let rank = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
            return rank[b.performance] - rank[a.performance]; 
        });
}

let employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
