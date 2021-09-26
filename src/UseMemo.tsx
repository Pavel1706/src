import React, {useMemo, useState} from 'react';


export const DifficultCountingExample = ()=> {

    const [a, SetA]=useState<number>(5)
    const [b, SetB]=useState<number>(5)

    let  resultA = 1
    let  resultB = 1

    resultA = useMemo( ()=> {
        let tempResultA = 1;
        for(let i = 1; i <= a; i++) {
            let  fake = 0
            while(fake < 100000){
                fake++;
                const a = Math.random()
            }
            resultA = resultA * i;
            tempResultA = tempResultA * i

        }
        return resultA
    }, [a] );


    for(let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange = {(e)=>SetA(+e.currentTarget.value)}/>
        <input value={b} onChange = {(e)=>SetB(+e.currentTarget.value)}/>
        <hr />
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UserSecret = (props: {users: Array<string>})=> {
    console.log('users')
    return <div>{
        props.users.map((u,i)=><div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UserSecret)

export const HelpsToReactMemo = ()=> {
    console.log('hey')
    const [counter, setCounter]= useState(0)
    const [users, setUsers] = useState(['Pavel', 'Sasha', 'Yulia', 'Kyky'])



    users.push('Sveta' + new Date().getTime())

    const newArray = useMemo(()=> {
        const newArray = users.filter(u=>u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = ()=> {
        const newUsers = [...users,'Sveta' + new Date().getTime() ]
        // users.push('Sveta' + new Date().getTime())
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=> setCounter(counter+1) } >+</button>
        <button onClick={()=> addUser() } >add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}