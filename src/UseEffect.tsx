import React, {useEffect, useState } from "react"


export const SimpleExample =() => {
    const [fake, setFake]=useState(1)
    const [counter, setCounter] = useState(1)



    useEffect(()=> {
        console.log('useEffect every render')
        document.title=counter.toString();
    })
    useEffect(()=> {
        console.log('useEffect only first render(componentDidMount)')
        document.title=counter.toString();
    },[])
    useEffect(()=> {
        console.log('useEffect first render and always when change counter')
        document.title=counter.toString();
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter+1)}>+++</button>
        {fake}
        <button onClick={() => setFake(fake+1)}>Fake+</button>

    </>
}