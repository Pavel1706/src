import React, {useMemo, useState} from "react";



type myFamilyType = {
    id: number
    title:string
    age: number
    height:number
}


const UserFamily = (props: {citizens: Array<string>})=> {
    console.log('kykysiki')
    return <div>
        {
            props.citizens.map((t, i) => <div key={i}> {t}</div>)
        }
    </div>
}

const Family = React.memo(UserFamily)

export function SelectMemo() {

    let [family, setFamily] = useState<boolean>(false)
    let [myFamily, setMyFamily]= useState<Array<myFamilyType>>([
        {id: 1, title: 'Dashka', age: 33, height: 175},
        {id: 2, title: 'Yulya', age: 4, height: 125},
        {id: 3, title: 'Romka', age: 1, height: 90},

    ])

    let [citizens, setCitizens]= useState(['Dashka', 'Yulya', 'Romka'])

    const newArray = useMemo( ()=> {

        const newArray = citizens.filter(t => t ==='Dashka')
        return newArray
    },[citizens])



    const newNum = useMemo( ()=> {
        console.log('age')

        const newNum = myFamily.filter(t => t.age <30)
        return newNum
    },[myFamily])

    function push() {
        console.log('push')
        setFamily(!family)
    }
    const addUser = () => {

        const newFamily = [...citizens, 'Pavel']
        setCitizens(newFamily)

    }
    let [counter, setCounter]=useState(0)

    return (
        <>
           <Family citizens={newArray}/>
            {/*<Young citizens={}/>*/}
<div>{citizens}</div>
            <div onClick={()=>newNum}>{newNum.map(t=>t.age<30)}</div>
        <button onClick={push}>MY FAMILY</button>
        <button onClick={()=> setCounter(counter+1)}>Counter</button>{counter}
        <button onClick={addUser}>X</button>
           {family ?
        myFamily.map(t => <div key={t.id}>{t.title}</div>):''}


     </>
    )

}
