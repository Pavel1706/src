function commonHello(){
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name)=> {
    const user = {
        name:name,
        site:'it-incubator.by',
        dateOfBirth: new Date(1987,6,17),
        hello:commonHello
    }
    return user
}


const u1 = userFabric('Pavel')
const u2 = userFabric('Jora')


console.log(u1)
console.log(u2)

u1.hello()
u2.hello()








//
// const deleteUser = (userId)=> {
//     const action = {
//         type: 'DELETE-USER',
//         payload: {
//             userId: userId
//         },
//         m: function(){}
//     }
//     return action
// }
//
// const action1 = deleteUser(5)
// const action2 = deleteUser(10)
// console.log(action1)
// console.log(action2)
