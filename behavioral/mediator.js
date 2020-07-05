class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = []
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if(to){
            to.receive(message, from)
        }else{
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const maks = new User('Maks')
const andr = new User('Andrey')
const ivan = new User('Ivan')

const room = new ChatRoom()

room.register(maks)
room.register(andr)
room.register(ivan)

maks.send('Hello', andr)
andr.send('Hello ivan', ivan)
ivan.send('Hello ivan')
//console.log(room.users)
