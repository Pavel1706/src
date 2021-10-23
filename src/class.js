class User {
    _name = ''

    constructor(name, site, dob) {
        this._name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }

    get name() {
        return this._name + '!@!'
    }

    set name(value) {
        // if(value ==='Igor'){
        //     throw new Error('Fuck off Igor')
        // }
        return this._name = value
    }

    hello() {
        this.counter++;
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Pavel', 'it-world', new Date(1987, 6, 17))
const u2 = new User('Grisha!', 'it-world', new Date(1987, 8, 19))

u1.name = 'Igor'


let users = [u1, u2]

// users.forEach(t=>t.hello())

class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob)
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: const sum=(a,b)=> a+b`)
    }

    hello() {
        super.hello();
        console.log('Go away' + this.name)
    }
}

class Hacker extends Coder {
    constructor(a, b, c, d) {
        super()
        this.tech = 'XXX'
        this._name = 'XXXXX'
    }

    code() {
        console.log('I`ll hack everything')
    }
}


const coder1 = new Coder('Pavel Coder', 'it-world', new Date(1987, 6, 17), `PHP`)
// coder1.code()


const hacker = new Hacker('Pavel Coder', 'it-world', new Date(1987, 6, 17), `PHP`)
// hacker.hello()
// hacker.code()

let users2 = [u1, u2, coder1, hacker]
users2.forEach(t=>t.hello())


// class DeleteUserAction {
//     constructor(){
//     this.type = 'DELETE-USER';
//     this.payload = {
//         userId: userId
//     }
//     }
// }
//
//
// const action1 = new DeleteUserAction(12324123)
// const action2 = new DeleteUserAction(555)
// console.log(action1)
// console.log(action2)