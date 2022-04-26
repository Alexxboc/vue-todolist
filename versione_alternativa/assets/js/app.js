/* 
Descrizione:
- Quando una task é stata completa allora l'utente vuole che venga inserita in un'altra colonna tipo "tasks completate"
- se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
- ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
- si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio...

*/

const app = new Vue ({
    el: '#app',
    data: {
        tasks:[
            {
                text: 'Fare la spesa',
                done: false,
                inputTransform: false
            },

            {
                text: 'Andare al cinema',
                done: false,
                inputTransform: false
            },

            {
                text: 'Fare i compiti',
                done: false,
                inputTransform: false
            },

            {
                text: 'Guardare la partita',
                done: false,
                inputTransform: false
            },
        ],

        newTask: '',
            
        completedTasks: [],

        deletedTasks: [],
        

    },

    methods: {
        removeTodo(index) {
            // console.log('remove', this.tasks.text);
            this.deletedTasks.unshift({text: this.tasks[index].text, done: this.tasks[index].done})
            this.tasks.splice(index, 1);
        },

        deleteCompleted(index) {
            this.deletedTasks.unshift({text: this.completedTasks[index].text, done: this.completedTasks[index].done})
            this.completedTasks.splice(index, 1);
        },

        addTask() {
            // console.log('add task');
            if(this.newTask) {
                this.tasks.unshift({text: this.newTask, done: false});
                this.newTask = '';
            }
            
            
        },

        addToCompleted(index) {
            // console.log('change value', this);
            if(this.tasks[index].done !== true) {
                this.tasks[index].done = true
                this.completedTasks.unshift({text: this.tasks[index].text, done: this.tasks[index].done})
                this.tasks.splice(index, 1)

            } else {
                this.tasks[index].done = false;
            } 
            // console.log(this.tasks[index].done);
        },

        removeFromCompleted(index) {
            if(this.completedTasks[index].done !== false) {
                this.completedTasks[index].done = false
                this.tasks.unshift({text: this.completedTasks[index].text, done: this.completedTasks[index].done})
                this.completedTasks.splice(index, 1)
            }
        },

        restoreDeletedTasks(index) {
            this.tasks.unshift({text: this.deletedTasks[index].text, done: this.deletedTasks[index].done})
            this.deletedTasks.splice(index, 1);
        },

        clearTrash() {
            const confirmEmptyTrash = confirm('stai per svuotare il cestino, i file al suo interno non saranno più disponibili')
            if(confirmEmptyTrash) {
                this.deletedTasks.splice(0, this.deletedTasks.length)
            }
        },

        inputTransformChangeValue(index) {
            if(this.tasks[index].inputTransform !== true) {
                this.tasks[index].inputTransform = true
            } else {
                this.tasks[index].inputTransform = false
            } 
            // console.log(this.tasks[index].inputTransform);
        }

    },
    
})

        
        
        
            
            