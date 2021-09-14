class NotesStore {
    //add your code here
    constructor(completed, active, others) {
        completed = []
        active = []
        others = []
    }

    addNote(state, name) {
        if (name === '') {
            throw new Error('Name cannot be empty')
        }
        if (state === 'completed') {
            this.completed.push(name)
        } else if (state === 'active') {
            this.active.push(name)
        } else if (state === 'others') {
            this.others.push(name)
        } else {
            throw new Error('invalid state' + state)
        }
    }

    getNotes(state) {
        switch (state) {
            case 'completed':
                return this.completed
            case 'active':
                return this.active
            case 'others':
                return this.others
            default:
                throw new Error('invalid state' + state)
        }
    }
}

