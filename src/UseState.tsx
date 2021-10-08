import React, {useState} from 'react'
import {useMemo} from 'react'

function generateData() {
    console.log('generateData')
    return 1
}


export const Example2 = () => {
    console.log('Example2')

    // const initialValue = useMemo(generateData,[])

    // const [counter, setCounter]= useState(initialValue) // [0, function(newValue){}]

    // const [counter, setCounter]= useState(()=>{
    //     return 328494923423
    // })
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}