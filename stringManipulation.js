function manageStudents() {
    function debug(actual, expected, message){
        if(actual!=expected){
            console.log(`Test Failed: ${message}, Expected: ${expected}, Output: ${actual}`)
        }else{
            console.log(`Test Passed: ${message}`)
        }
    }
    let students = ["Alice", "Bob", "Charlie"]

    // Test Case 1: Adding "David" at index 1
    students.splice(1, 0, "David")
    debug(students.join(","), "Alice,David,Bob,Charlie", "Adding David at index 1")

    // Test Case 2: Checking if "Eve" exists
    debug(students.includes("Eve"), false, "Checking if Eve is in the list")

    // Test Case 3: Adding at the beginning
    students = ["Bob", "Charlie"]
    students.splice(0, 0, "Alice")
    debug(students.join(","), "Alice,Bob,Charlie", "Adding Alice at the beginning")

    // Test Case 4: Adding at the end
    students = ["Alice", "Bob"]
    students.push("Charlie")
    debug(students.join(","), "Alice,Bob,Charlie", "Adding Charlie at the end")

    // Test Case 5: Checking if "Charlie" exists after adding
    debug(students.includes("Charlie"), true, "Checking if Charlie is in the list")
}

manageStudents();

