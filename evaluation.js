function taskManagementSystem(){
    let tasks = []

    return {
        addTask: function(title){
            tasks.push({title, status: "pending"});
            return this
        },
        completeTask: function(title){
            tasks = tasks.map(task =>
                task.title == title ? {...task, status: "completed"}: task
            )
            return this
        },
        removeTask: function(title){
            tasks = tasks.filter(task => task.title !== title)
            return this
        },
        listTask: function(){
            tasks.forEach(task => console.log(task))
            return this
        },
        filterStatus: function(status){
            console.log(tasks.filter(task => task.status == status))
            return this
        },
        countTask: function(){
            let completedCount = tasks.filter(task => task.status == "completed").length
            let pendingCount = tasks.filter(task => task.status == "pending").length
            console.log(`Completed: ${completedCount}, Pending: ${pendingCount}`)
            return this
        },
        getTask: function(){
            return tasks
        }

    }
}

const run = taskManagementSystem()

run.addTask("task1").addTask("task2").completeTask("task3")
    .addTask("task3").removeTask("task1").listTask()
    .filterStatus("pending").countTask().listTask()