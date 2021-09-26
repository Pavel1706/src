import React, {useState} from 'react';


const NewMessagesCounter = (props: {counter: number}) => {
    return <div>{props.counter}</div>
}

const UserSecret = (props: {users: Array<string>})=> {
    console.log('users')
    return <div>{
        props.users.map((u,i)=><div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UserSecret)

export const Example1 = ()=> {
    const [counter, setCounter]= useState(0)
    const [users, setUsers] = useState(['Pavel', 'Sasha', 'Yulia'])

    const addUser = ()=> {
        const newUsers = [...users,'Sveta' + new Date().getTime() ]
        setUsers(newUsers)
    }

    // users.push('Sveta' + new Date().getTime())

    return <>
        <button onClick={()=> setCounter(counter+1) } >+</button>
        <button onClick={()=> {addUser()} } >add User</button>
        <NewMessagesCounter counter={counter}/>
        <Users users={users}/>
    </>
}