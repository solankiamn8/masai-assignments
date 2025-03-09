function taskManagementSystem(){
    let tasks = []

    return {
        addTask: function(title){
            return tasks.push({title, status: "pending"});;
        },
        completeTask: function(title){
            return tasks = tasks.map(task =>
                task.title == title ? {...task, stats: "completed"}: task
            )
        },
        removeTask: function(title){
            return tasks = tasks.filter(task => task.title !== title)
        },
        listTask: function(){
            return tasks.forEach(task => console.log(task))
        },
        filterStatus: function(status){
            return console.log(tasks.filter(task => task.status == status))
        },
        countTask: function(){
            let completedCount = tasks.filter(task => task.status == "completed").length
            let pendingCount = tasks.filter(task => task.status == "pending").length
            console.log(`Completed: ${completedCount}, Pending: ${pendingCount}`)
        },
        getTask: function(){
            return tasks
        }

    }
}

const run = taskManagementSystem()

run.addTask("t1").listTask()
// run.addTask("task1").addTask("task2").completeTask("task1")
//     .addTask("task3").removeTask("task1").listTask()
//     .filterStatus("pending").countTask().getTasks()