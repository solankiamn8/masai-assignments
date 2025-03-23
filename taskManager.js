function createTaskManager(){
    let tasks = []
    let idCounter = 1

    function addTask(title){
        let task = {taskId: idCounter++, title, completed: false}
        tasks.push(task)
        return task
    }

    function getAllTasks(){
        return JSON.stringify(tasks)
    }

    function markComplete(taskId){
        let task = tasks.find(task => task.taskId == taskId)
        if(task){
            task.completed = true
            return true
        }
        return false
    }

    function removeTask(taskId){
        let index = tasks.findIndex(task => task.taskId == taskId)
        if(index !== -1){
            tasks.splice(index, 1)
            return true
        }
        return false
    }

    function getPendingTasks(){
        return tasks.filter(task => !task.completed)
    }

    function getCompletedTasks(){
        return tasks.filter(task => task.completed).map(task => task.title)
    }

    function sortTask(){
        return tasks.sort((a, b) => {
            return a.title.localeCompare(b.title)
        }).map(task => task.title)
    }

    return {
        addTask,
        getAllTasks,
        markComplete,
        removeTask,
        getPendingTasks,
        getCompletedTasks,
        sortTask
    }
}

let taskManager = createTaskManager()

console.log(taskManager.getAllTasks())
console.log(taskManager.addTask("Task1"))
console.log(taskManager.addTask("Task2"))
console.log(taskManager.addTask("Task3"))
console.log(taskManager.getAllTasks())
console.log(taskManager.markComplete(2))
console.log(taskManager.getPendingTasks())
console.log(taskManager.getCompletedTasks())
console.log(taskManager.sortTask())

