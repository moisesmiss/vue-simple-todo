const app = new Vue({
    el: '#app',
    data: {
        title: 'Lista de tareas',
        tasks: [],
        newTask: '',
    },
    methods: {
        addTask(){
            let text = this.newTask.trim()
            if(text){
                let task = {
                    name: this.newTask,
                    check: false,
                }
                this.tasks.push(task)
                this.newTask = ''
            }
        },
        deleteTask(element){
            this.tasks.splice(element, 1)
        }
    }
})