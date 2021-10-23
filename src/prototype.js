
function User(name,site,dob){
    this.name=name;
    this.site=site;
    this.dateOfBirth = dob;
}

User.prototype.hello = function(){
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Pavel', 'it-world', new Date(1987,6,17))
const u2 = new User('Grisha', 'it-world', new Date(1987,8,19))


u1.hello()






// function DeleteUserAction(userId) {
//     // this = {}
//     this.type='DELETE-USER';
//     this.payload ={
//         userId: userId
//     }
// }
//
// const action1 = new DeleteUserAction(12324123)
// const action2 = new DeleteUserAction(555)
// console.log(action1)
// console.log(action2)