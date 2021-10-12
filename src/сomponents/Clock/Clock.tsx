import { useState } from "react"
import { useEffect } from "react"



export const Clock = () => {
    const [timerId, setTimerId] = useState<number>()
    const [date, setDate] = useState<Date>()

    function stopTime(){
        clearInterval(timerId)
    }

    console.log('SetTimeOutExample')

        useEffect(() => {
            const id: number = +setInterval(() => {
                setDate(new Date())
            }, 1000)
            setTimerId(id)
        }, [])


    const stringTime = date?.toLocaleTimeString()

    return <>
        <div>Hello, time: {stringTime}</div>
        {/*<button onClick={StarTime}>START TIME</button>*/}
        <button onClick={stopTime}>STOP TIME</button>
        {/*<button onClick={() => setCounter(counter + 1)}>+++</button>*/}
        {/*<div> fake: {fake} </div>*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}

    </>
}