import React, {useState} from "react";

let myFamily = [
    {id: 1, title: 'Dashka', age: 33, height: 175},
    {id: 2, title: 'Yulya', age: 4, height: 125},
    {id: 3, title: 'Romka', age: 1, height: 90},

]


export function SelectMemo() {

    let [family, setFamily] = useState<boolean>(false)

    function push() {
        setFamily(!family)

    }

    return (
        <>
        <button onClick={push}>MY FAMILY</button>
           {family ?
        myFamily.map(t => <div key={t.id}>{t.title}</div>):''}


     </>
    )

}
